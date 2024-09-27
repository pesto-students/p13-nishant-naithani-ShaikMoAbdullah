import { Routes, Route } from "react-router-dom";
import Blogs from "../components/Blogs";
import BlogDetail from "../components/BlogDetail";

const BlogsRoutes = () => {
  return (
    <Routes>
      <Route index element={<Blogs />} />
      <Route path=":blogId" element={<BlogDetail />} />
    </Routes>
  );
};

export default BlogsRoutes;
