import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 40px',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: 'black',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <h1 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        fontStyle: 'italic',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>रिसे</h1>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'black',
          fontWeight: '500',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>Home</Link>
        <Link to="/about" style={{ 
          textDecoration: 'none', 
          color: 'black',
          fontWeight: '500',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>About</Link>
        <Link to="/education" style={{ 
          textDecoration: 'none', 
          color: 'black',
          fontWeight: '500',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>Education</Link>
        <Link to="/services" style={{ 
          textDecoration: 'none', 
          color: 'black',
          fontWeight: '500',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>Services</Link>
        <Link to="/projects" style={{ 
          textDecoration: 'none', 
          color: 'black',
          fontWeight: '500',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>Projects</Link>
        <Link to="/contact" style={{ 
          textDecoration: 'none', 
          color: 'black',
          fontWeight: '500',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>Contact</Link>
      </div>
    </nav>
  );
}