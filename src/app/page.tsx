import PostList from "@/components/postList";
import siteMetadata from "@/siteMetadata";

export default function Page() {
	return (
		<>
			<div>
				<p className="my-2">{siteMetadata.SELFDESCRIPTION}</p>
			</div>
			<PostList />
		</>
	);
}
