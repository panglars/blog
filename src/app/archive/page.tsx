import { getAllCategory } from "@/lib/posts";

export default async function Archive() {
  getAllCategory();
  return (
    <>
      <h1 className="text-center text-4xl leading-snug my-16 text-slate-900 dark:text-slate-100">
        Archive
      </h1>
      <p> Building...</p>
    </>
  );
}
 