import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="border-2 border-sky-300 h-screen p-8 bg-stone-300">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
