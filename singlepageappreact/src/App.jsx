import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <div className="main">
        <SearchBar onSearch={setSearchTerm} />
        <ProjectForm onAddProject={addProject} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;