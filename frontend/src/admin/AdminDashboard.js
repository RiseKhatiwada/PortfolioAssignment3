import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    projects: 0,
    education: 0,
    messages: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [projRes, eduRes, msgRes] = await Promise.all([
          api.get("/projects"),   // public route
          api.get("/education"),  // public route
          api.get("/contact"),    // admin-protected route
        ]);

        setStats({
          projects: projRes.data.length,
          education: eduRes.data.length,
          messages: msgRes.data.length,
        });
      } catch (err) {
        console.error("Failed to load admin stats:", err);
      }
    };

    loadStats();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1100px", margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome, {user?.name}</p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            background: "#e53e3e",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Logout
        </button>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Projects */}
        <div
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Projects</h2>
          <p style={{ fontSize: "2.5rem", margin: "10px 0" }}>
            {stats.projects}
          </p>
          <Link to="/admin/projects">Manage Projects</Link>
        </div>

        {/* Education */}
        <div
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Education Entries</h2>
          <p style={{ fontSize: "2.5rem", margin: "10px 0" }}>
            {stats.education}
          </p>
        </div>

        {/* Contact Messages */}
        <div
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Messages</h2>
          <p style={{ fontSize: "2.5rem", margin: "10px 0" }}>
            {stats.messages}
          </p>
        </div>
      </div>
    </div>
  );
}
