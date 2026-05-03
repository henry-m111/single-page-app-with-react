import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Project title is required.");
      return;
    }

    onAddProject({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className="form-card">
      <h2>Add a new project</h2>
      {error && <p className="form-error">{error}</p>}
      <form onSubmit={submit}>
        <input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;