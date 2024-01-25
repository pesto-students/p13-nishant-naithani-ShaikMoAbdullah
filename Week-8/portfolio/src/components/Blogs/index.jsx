import useData from "../../data";
import Book from "../Book";

const Blogs = () => {
  const { blogs } = useData();
  return blogs.map((book) => <Book key={book.id} book={book} />);
};

export default Blogs;
