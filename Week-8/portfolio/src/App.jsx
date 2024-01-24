import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
