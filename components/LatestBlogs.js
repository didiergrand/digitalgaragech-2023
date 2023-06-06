import BlogItem from "../pages/blog/BlogItem";

// get data from json file
//const sortedData = blogData.items.sort((a, b) => b.id - a.id);

const Blog = props => {
  return (
    <section className="blogitem max-w-7xl mx-auto p-0 pt-12 sm:grid grid-cols-3 gap-6">
    {/* Loop blog posts */}
    {props.posts && props.posts.map(post => (
      <BlogItem
        key={post.id}
        id={post.id}
        title={post.title.rendered}
        image={post.featured_media}
        slug={post.slug}
        description={post.excerpt.rendered}
      />
    ))}
    </section>
  );
};
export default Blog;