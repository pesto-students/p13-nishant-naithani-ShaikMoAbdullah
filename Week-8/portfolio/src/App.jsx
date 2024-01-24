import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
