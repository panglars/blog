import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Postbody from "../../components/post-body";
import { getPostBySlug, getAllPosts } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.scss";

import Head from "next/head";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{post.slug}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{post.title}</h1>
      <div className={utilStyles.lightText}>
        <Postbody content={post.content} />
      </div>
    </Layout>
  );
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "author_picture",
    "og_image",
    "cover_image",
    "content",
  ]);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
