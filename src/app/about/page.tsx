import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-center text-2xl">About Me</h1>
      <p> Building...</p>
      <Link href="/" className="text-xl font-bold m-5">
        Go back
      </Link>
    </>
  );
}
