import Link from "next/link";
import Button from "./button";

export default function NavBar() {
  async function logout() {
    "use server";
    console.log("logout or login?");
    // may need client component- where to pput this logic...
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
  }

  return (
    <div className="navbar sticky top-0 mb-1 flex justify-between">
      <Link href="/home">
        <button className="btn">ConfettiBomb.me</button>
      </Link>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
