import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const Book = (props) => {
  const { book } = props;
  const { blogId } = useParams();
  console.log(blogId);
  return (
    <Link to={`/blogs/${book.id}`}>
      <div className="p-8 border-2 border-white h-fit">
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
