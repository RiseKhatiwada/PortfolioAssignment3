import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      textAlign: 'center',
      color: 'white'
    }}>
      <img 
        src={profile} 
        alt="Rise" 
        style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          marginBottom: '30px',
          objectFit: 'cover',
          border: '4px solid white',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
        }} 
      />
      <h1 style={{ 
        fontSize: '3.5rem', 
        fontWeight: 'bold', 
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>Hi, I'm Rise</h1>
      <p style={{ 
        fontSize: '1.3rem', 
        marginBottom: '40px',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Full-Stack Developer passionate about creating beautiful, functional websites and applications.
      </p>
      <button 
        onClick={() => navigate('/projects')}
        style={{
          padding: '15px 40px',
          backgroundColor: 'white',
          color: '#667eea',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
        View My Work
      </button>
    </div>
  );
}