import Layout from "@component/components/Layout";
import BlogDetailItem from "./BlogDetailItem";
import { useRouter } from "next/router";

// Le composant pour votre page de blog
const BlogDetail = ({ post, previousPost, nextPost, similarPosts }) => {
  // Affichez votre post ici

  return (
        <Layout>
          <BlogDetailItem
            post={post}
            previousPost={previousPost}
            nextPost={nextPost}
            similarPosts={similarPosts}
          />
        </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const res = await fetch(
    `https://admin.digitalgarage.ch/wp-json/wp/v2/posts?slug=${slug}`
  );

  const posts = await res.json();
  const currentPost = posts[0];

  // Récupération de l'identifiant de la catégorie de l'article actuel
  const categoryId = currentPost?.categories[0];

  // Récupération de l'article précédent de la même catégorie
  const previousPostRes = await fetch(
    `https://admin.digitalgarage.ch/wp-json/wp/v2/posts?per_page=1&orderby=date&order=desc&status=publish&before=${currentPost.date}&categories=${categoryId}`
  );
  const previousPosts = await previousPostRes.json();
  const previousPost = previousPosts.length > 0 ? previousPosts[0] : null;

  // Récupération de l'article suivant de la même catégorie
  const nextPostRes = await fetch(
    `https://admin.digitalgarage.ch/wp-json/wp/v2/posts?per_page=1&orderby=date&order=asc&status=publish&after=${currentPost.date}&categories=${categoryId}`
  );
  const nextPosts = await nextPostRes.json();
  const nextPost = nextPosts.length > 0 ? nextPosts[0] : null;

  const similarPostsRes = await fetch(
    `https://admin.digitalgarage.ch/wp-json/wp/v2/posts?per_page=3&orderby=date&order=asc&status=publish&categories=${categoryId}&exclude=${currentPost.id}`
  );
  const similarPosts = await similarPostsRes.json();
  return {
    props: {
      post: currentPost,
      previousPost,
      nextPost,
      similarPosts
    },
  };
}
export default BlogDetail;

