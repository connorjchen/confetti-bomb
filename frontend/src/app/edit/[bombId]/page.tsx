import { NextPage } from "next";

interface EditBombProps {
  params: {
    bombId: string;
  };
}

const EditBomb: NextPage<EditBombProps> = ({ params }) => {
  return (
    <p className="text-6xl font-bold text-center">EditBomb {params.bombId}</p>
  );
};

export default EditBomb;
