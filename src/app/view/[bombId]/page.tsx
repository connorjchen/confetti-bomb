import Error from "@/components/Error";
import prisma from "@/lib/prisma";
import ViewBombClient from "./ViewBomb.client";

type Props = {
  params: {
    bombId: string;
  };
};

export default async function ViewBomb({ params }: Props) {
  const bomb = await prisma.bomb.findUnique({
    where: {
      id: params.bombId,
    },
  });

  if (!bomb) {
    return <Error message="Bomb not found" />;
  }

  return <ViewBombClient bomb={bomb} />;
}
