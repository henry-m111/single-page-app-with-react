function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="image-box"></div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;