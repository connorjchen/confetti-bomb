import { auth } from "@/auth";
import Button from "@/components/Button";
import HFlex from "@/components/HFlex";
import { H5, P } from "@/components/Text";
import VFlex from "@/components/VFlex";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Error from "@/components/Error";
import NavBar from "@/components/NavBar";

export default async function Home() {
  const session = await auth();
  let user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
    include: {
      bombs: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
  });
  if (!user && session?.user?.email) {
    user = await prisma.user.create({
      data: {
        name: session?.user?.name || "",
        email: session.user.email,
      },
      include: {
        bombs: {
          orderBy: {
            updatedAt: "desc",
          },
        },
      },
    });
  }

  // TODO(connor): use fa bomb icon on select
  // TODO(connor): home page, preview/share page, envelope animation (youtube it)
  if (!user) {
    return <Error message="User not found" />;
  }

  async function createNewProject() {
    "use server";
    const session = await auth();
    let user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email || "",
      },
    });
    const bomb = await prisma?.bomb.create({
      data: {
        fileName: "Untitled",
        textContent: "",
        iconBlobUrl: "",
        backgroundColor: "#fedfff",
        confettiColors: ["#fe9200", "#aea1ff", "#7b64ff"],
        confettiNumber: 500,
        confettiRadius: 9,
        author: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    redirect(`/edit/${bomb.id}`);
  }

  return (
    <VFlex>
      <NavBar />
      <div className="bg-base-200 p-4">
        <div className="container mx-auto">
          <H5>Start New Project</H5>
          <Button className="mt-4 h-60 aspect-[8.5/11] bg-white" onClick={createNewProject}>
            <div>+</div>
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        <H5 className="pt-2">Recent Projects</H5>
        <HFlex className="flex flex-wrap gap-4">
          {user.bombs.map((bomb, index) => (
            <Link
              href={`/edit/${bomb.id}`}
              className="mt-4 h-60 aspect-[8.5/11] btn-outline btn btn-primary"
              key={index}
            >
              <P>{bomb.fileName}</P>
            </Link>
          ))}
        </HFlex>
      </div>
    </VFlex>
  );
}
