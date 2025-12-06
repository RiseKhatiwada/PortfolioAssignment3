import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await api.get("/projects");
        setProjects(res.data || []);
      } catch (err) {
        console.error("Error loading projects:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <div style={{ maxWidth: "950px", margin: "0 auto", padding: "40px", color: "white" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "0px 0px 10px rgba(0,0,0,0.4)",
        }}
      >
        Projects
      </h1>

      {loading && <p>Loading projects...</p>}

      {!loading && projects.length === 0 && (
        <p style={{ textAlign: "center" }}>
          No projects found. Login as admin to add projects.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj._id}
            style={{
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ marginBottom: "10px", fontSize: "1.4rem" }}>
              {proj.title}
            </h2>

            <p style={{ marginBottom: "10px", lineHeight: "1.5" }}>
              {proj.description}
            </p>

            {proj.technologies && (
              <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
                Tech: {proj.technologies}
              </p>
            )}

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#90cdf4", textDecoration: "underline" }}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
