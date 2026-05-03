import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty">No projects yet. Add one above!</p>;
  }

  return (
    <div className="grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

export default ProjectList;