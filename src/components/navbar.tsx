import Link from "next/link";
import AuthButton from "./AuthButton/AuthButton.server";

export default function NavBar() {
  return (
    <div className="navbar top-0 mb-1 flex justify-between">
      <Link href="/home">
        <button className="btn">ConfettiBomb.me</button>
      </Link>
      <AuthButton />
    </div>
  );
}
