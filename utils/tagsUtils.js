export async function fetchPostTags(postSlug) {
    const response = await fetch(`https://admin.digitalgarage.ch/wp-json/wp/v2/posts?slug=${postSlug}`);
    const posts = await response.json();
  
    if (posts.length > 0) {
      const post = posts[0];
      const tagIds = post.tags;
  
      if (tagIds.length > 0) {
        const tagsResponse = await fetch(`https://admin.digitalgarage.ch/wp-json/wp/v2/tags?include=${tagIds.join(',')}`);
        const tags = await tagsResponse.json();
        const tagNames = tags.map(tag => tag.name);
        console.log(tagNames);
        return tagNames;
      }
    }
  
    return [];
  }