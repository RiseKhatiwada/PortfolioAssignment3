import React from "react";

export default function Services() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px', color: 'white' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Services</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontWeight: '600', marginBottom: '15px', fontSize: '1.4rem', color: '#fff' }}>Web Development</h2>
          <p style={{ fontSize: '16px', opacity: '0.9', lineHeight: '1.6' }}>Building responsive websites using HTML, CSS, JavaScript, and React.</p>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontWeight: '600', marginBottom: '15px', fontSize: '1.4rem', color: '#fff' }}>UI/UX Design</h2>
          <p style={{ fontSize: '16px', opacity: '0.9', lineHeight: '1.6' }}>Creating simple and user-friendly interfaces for websites and apps.</p>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontWeight: '600', marginBottom: '15px', fontSize: '1.4rem', color: '#fff' }}>Game Development</h2>
          <p style={{ fontSize: '16px', opacity: '0.9', lineHeight: '1.6' }}>I create fun games</p>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontWeight: '600', marginBottom: '15px', fontSize: '1.4rem', color: '#fff' }}>Learning & Tutorials</h2>
          <p style={{ fontSize: '16px', opacity: '0.9', lineHeight: '1.6' }}>Guides and tutorials for beginners in web development and React.</p>
        </div>
      </div>
    </div>
  );
}