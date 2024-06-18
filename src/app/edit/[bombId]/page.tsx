import Error from "@/components/Error";
import prisma from "@/lib/prisma";
import EditBombClient from "./EditBomb.client";
import { Bomb } from "@prisma/client";
import NavBar from "@/components/NavBar";
import VFlex from "@/components/VFlex";

type Props = {
  params: {
    bombId: string;
  };
};

async function updateBomb(bomb: Bomb): Promise<boolean> {
  "use server";
  try {
    await prisma.bomb.update({
      where: {
        id: bomb.id,
      },
      data: {
        fileName: bomb.fileName,
        textContent: bomb.textContent,
        iconBlobUrl: bomb.iconBlobUrl,
        backgroundColor: bomb.backgroundColor,
        confettiColors: bomb.confettiColors,
        confettiNumber: bomb.confettiNumber,
        confettiRadius: bomb.confettiRadius,
      },
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export default async function EditBomb({ params }: Props) {
  const bomb = await prisma.bomb.findUnique({
    where: {
      id: params.bombId,
    },
  });

  if (!bomb) {
    return <Error message="Bomb not found" />;
  }

  return (
    <VFlex className="h-full">
      <NavBar />
      <EditBombClient bomb={bomb} updateBomb={updateBomb} />
    </VFlex>
  );
}
