import Error from "@/components/Error";
import prisma from "@/lib/prisma";
import ViewBomb from "./ViewBomb.client";

type Props = {
  params: {
    bombId: string;
  };
};

export default async function EditBomb({ params }: Props) {
  const bomb = await prisma.bomb.findUnique({
    where: {
      id: params.bombId,
    },
  });

  if (!bomb) {
    return <Error message="Bomb not found" />;
  }

  return <ViewBomb bomb={bomb} />;
}
// Open envelope animation, option to choose text color, logo stamp in corner, name address, text, confetti image, confetti speed and duration
