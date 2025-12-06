import React from "react";
import myPic from "../assets/about.jpg";

export default function About() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 24px',
      color: 'white'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: '40px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>About Me</h1>
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px' 
      }}>
        <img 
          src={myPic} 
          alt="Rise" 
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
          }} 
        />
      </div>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        padding: '40px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
      }}>
        <p style={{ 
          marginBottom: '20px', 
          fontSize: '18px', 
          lineHeight: '1.7',
          opacity: '0.9'
        }}>
          Hello! My name is Rise. I am learning web development and building my
          portfolio with React.
        </p>
        <p style={{ 
          marginBottom: '20px', 
          fontSize: '18px', 
          lineHeight: '1.7',
          opacity: '0.9'
        }}>
          I enjoy creating simple and interactive web pages, learning new
          technologies, and improving my coding skills.
        </p>
        <p style={{ 
          marginBottom: '30px', 
          fontSize: '18px', 
          lineHeight: '1.7',
          opacity: '0.9'
        }}>
          This portfolio showcases my projects, skills, and ways to get in touch
          with me.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <a href="/resume.pdf" style={{
            backgroundColor: '#fff',
            color: '#667eea',
            padding: '15px 35px',
            textDecoration: 'none',
            borderRadius: '30px',
            display: 'inline-block',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}>View Resume</a>
        </div>
      </div>
    </div>
  );
}