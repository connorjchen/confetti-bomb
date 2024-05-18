interface EditBombProps {
  params: {
    bombId: string;
  };
}

export default function EditBomb({ params }: EditBombProps) {
  // const data = await prisma.bomb.findUnique({

  return <p className="text-6xl font-bold text-center">EditBomb {params.bombId}</p>;
}
// Open envelope animation, option to choose text color, logo stamp in corner, name address, text, confetti image, confetti speed and duration
