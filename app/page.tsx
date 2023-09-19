import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-center text-2xl font-sans m-2">
        Hello,I'm Pang LAN{" "}
      </h1>
      <h2 className="text-center text-xl">都不知道该干什么</h2>
      <Link href="/about" className="text-left">
        About{" "}
      </Link>
    </>
  );
}
