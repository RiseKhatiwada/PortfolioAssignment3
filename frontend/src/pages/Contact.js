import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success or error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      // Calls backend: POST /contact
      await api.post("/contact", formData);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // redirect after success
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setStatus(
        err.response?.data?.message ||
          "There was an error sending the message."
      );
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Me</h1>

      {status && (
        <div
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            backgroundColor: status.includes("successfully")
              ? "rgba(72,187,120,0.4)"
              : "rgba(245,101,101,0.4)",
          }}
        >
          {status}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
