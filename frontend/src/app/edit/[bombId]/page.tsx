interface EditBombProps {
  params: {
    bombId: string;
  };
}

export default function EditBomb({ params }: EditBombProps) {
  return (
    <p className="text-6xl font-bold text-center">EditBomb {params.bombId}</p>
  );
}
