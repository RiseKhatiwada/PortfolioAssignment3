import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function ProjectsAdmin() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
  });

  const [error, setError] = useState("");

  // ------------------------------
  // Load all Projects from backend
  // ------------------------------
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data || []);
    } catch (err) {
      console.error("Failed to load projects:", err);
      setError("Unable to load projects");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // ------------------------------
  // Form change handler
  // ------------------------------
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ------------------------------
  // Open form for CREATE
  // ------------------------------
  const startCreate = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      technologies: "",
      link: "",
    });
    setShowForm(true);
    setError("");
  };

  // ------------------------------
  // Open form for EDIT
  // ------------------------------
  const startEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      link: project.link,
    });
    setShowForm(true);
    setError("");
  };

  // ------------------------------
  // Submit form (Create or Update)
  // ------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (editingId) {
        // UPDATE
        const res = await api.put(`/projects/${editingId}`, formData);
        setProjects((prev) =>
          prev.map((p) => (p._id === editingId ? res.data : p))
        );
      } else {
        // CREATE
        const res = await api.post("/projects", formData);
        setProjects((prev) => [...prev, res.data]);
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({
        title: "",
        description: "",
        technologies: "",
        link: "",
      });
    } catch (err) {
      console.error("Save failed:", err);
      setError("Could not save project.");
    }
  };

  // ------------------------------
  // DELETE a project
  // ------------------------------
  const deleteProject = async (id) => {
    try {
      await api.delete(`/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Could not delete project.");
    }
  };

  // ------------------------------
  // UI Rendering
  // ------------------------------
  return (
    <div style={{ padding: "20px", maxWidth: "1100px", margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Manage Projects</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            background: "#e53e3e",
            color: "white",
            border: "none",
          }}
        >
          Logout
        </button>
      </header>

      <button
        onClick={startCreate}
        style={{
          padding: "10px 20px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        Add New Project
      </button>

      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}

      {/* FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            marginBottom: "30px",
            borderRadius: "8px",
          }}
        >
          <h2>{editingId ? "Edit Project" : "Create Project"}</h2>

          <label>Title</label>
          <input
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />

          <label>Description</label>
          <textarea
            name="description"
            required
            rows="4"
            value={formData.description}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />

          <label>Technologies</label>
          <input
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />

          <label>Project Link</label>
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "20px", padding: "8px" }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "6px",
            }}
          >
            {editingId ? "Update" : "Create"}
          </button>
        </form>
      )}

      {/* LIST OF PROJECTS */}
      <div>
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p style={{ fontStyle: "italic" }}>
                {project.technologies}
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => startEdit(project)}
                style={{
                  padding: "6px 12px",
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProject(project._id)}
                style={{
                  padding: "6px 12px",
                  background: "#e53e3e",
                  color: "white",
                  border: "none",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
