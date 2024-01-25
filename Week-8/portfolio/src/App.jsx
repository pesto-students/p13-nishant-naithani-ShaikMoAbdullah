import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import NoData from "./components/NoData";
import BlogsRoutes from "./Routes/BlogsRoutes";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="blogs/*" element={<BlogsRoutes />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </>
  );
}

export default App;
