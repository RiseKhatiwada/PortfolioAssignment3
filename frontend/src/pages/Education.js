import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Education() {
  const [educationList, setEducationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEducation = async () => {
      try {
        const res = await api.get("/education");
        setEducationList(res.data || []);
      } catch (err) {
        console.error("Error loading education:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEducation();
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
        Education
      </h1>

      {loading && <p>Loading education...</p>}

      {!loading && educationList.length === 0 && (
        <p style={{ textAlign: "center" }}>
          No education entries found. Login as admin to add some.
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {educationList.map((edu) => (
          <div
            key={edu._id}
            style={{
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ marginBottom: "5px", fontSize: "1.6rem" }}>
              {edu.degree}
            </h2>

            <p style={{ marginBottom: "8px", opacity: 0.85 }}>
              {edu.school}
            </p>

            <p
              style={{
                marginBottom: "10px",
                fontWeight: "bold",
                opacity: 0.9,
              }}
            >
              {edu.startYear} - {edu.endYear}
            </p>

            {edu.details && (
              <p style={{ lineHeight: "1.6", opacity: 0.85 }}>{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
