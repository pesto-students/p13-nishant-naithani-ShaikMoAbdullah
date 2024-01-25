import { useParams } from "react-router-dom";
import useData from "../../data/index";

const BlogDetail = () => {
  const { blogId } = useParams();
  const { blogs } = useData();

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
