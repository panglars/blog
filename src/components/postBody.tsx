import orgStyles from "./org-styles.module.css";

export default function PostBody({ content }: any) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={orgStyles["org"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
