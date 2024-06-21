import Link from "next/link";

export default function Landing() {
  // TODO(connor): use framer motion
  // https://www.youtube.com/watch?v=BtsVMvds3P0&list=PL6GLvD4i9IQV1KG1pPXJL4099MchO0BDs&index=1&ab_channel=WrongAkram
  // https://www.youtube.com/watch?v=fmgh4QbpK_w&list=PL6GLvD4i9IQV1KG1pPXJL4099MchO0BDs&index=2&ab_channel=FrontendFYI
  // TODO(connor): https://www.youtube.com/watch?v=3QrkCmsfewM&ab_channel=WrongAkram

  return (
    <div>
      <Link href="/home">
        <button className="btn btn-outline">Create a Confetti Bomb!</button>
      </Link>
    </div>
  );
}
