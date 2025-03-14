import axios from "axios";

export default async function BlogPage({ params }: any) {
  const postId = (await params).postId;
  const blog = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const blogData = blog.data;

  return (
    <div>
      <h3>Blog Id :{blogData.id}</h3>
      <h2>Title: {blogData.title}</h2>
      <h4>{blogData.body}</h4>
    </div>
  );
}
