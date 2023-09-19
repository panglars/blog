import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-center text-2xl">About Me</h1>
      <Link href="/" className="text-right">
        Go back
      </Link>
    </>
  );
}
