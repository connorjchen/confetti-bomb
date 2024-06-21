import Link from "next/link";
import AuthButton from "./AuthButton/AuthButton.server";

export default function NavBar() {
  return (
    <div className="p-4 top-0 flex justify-between bg-base-200">
      <Link href="/home">
        <button className="btn btn-outline">ConfettiBomb.me</button>
      </Link>
      <AuthButton />
    </div>
  );
}
