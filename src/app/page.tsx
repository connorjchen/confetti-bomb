import Link from "next/link";

export default function Landing() {
  // TODO: implement https://github.com/wrongakram/pageloader/tree/main
  return (
    <div>
      <Link href="/home">
        <button className="btn btn-outline">Create a Confetti Bomb!</button>
      </Link>
    </div>
  );
}
