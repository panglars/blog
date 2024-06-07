export default function PostBody({ content }: any) {
	return (
		<div className="mx-auto max-w-3xl">
			<article
				className="prose max-w-none py-12 dark:prose-invert"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}
