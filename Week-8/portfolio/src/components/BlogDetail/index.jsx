import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams();
  const blogs = [
    {
      id: 1,
      title: "John Smith",
      description: "John Smith is the new author of the blog",
      moreInfo: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 2,
      title: "John Kennedy",
      description: "John Kennedy is the new author of the blog",
      moreInfo: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 3,
      title: "John Marvel",
      description: "John Marvel is the new author of the blog",
      moreInfo: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 4,
      title: "John Handler",
      description: "John Handler is the new author of the blog",
      moreInfo: "lorem ipsum dolor sit amet, consectetur adip",
    },
  ];

  const blog = blogs.find((blog) => blog.id === Number(blogId));
  return (
    <div className="p-8 border-2 border-white h-fit w-screen">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <p>{blog.moreInfo}</p>
    </div>
  );
};

export default BlogDetail;
