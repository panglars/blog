import orgStyles from "./org-styles.module.scss";

export default function Postbody({ content }) {
  return (
    <div className={orgStyles["org"]}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
