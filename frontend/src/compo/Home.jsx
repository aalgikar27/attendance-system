import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/choose-user');
  };

  const handleGuestLogin = () => {
    navigate('/choose-user');
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.imageContainer}>
          <img 
            src="https://media.collegedekho.com/media/img/institute/crawled_images/33322/qwsdftyhj56585.jpg?width=1080" 
            alt="Students" 
            style={styles.image} 
          />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.welcomeTitle}>
            Welcome to <br /> Attendance Management <br /> System with Reports
          </h1>
          <p style={styles.descriptionText}>
            Streamline attendance, manage students and faculty, track performance, 
            and generate insightful reports effortlessly.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.loginButton} onClick={handleLogin}>Login</button>
            <button style={styles.guestButton} onClick={handleGuestLogin}>Login as Guest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    background: 'linear-gradient(to right, #1E3C72, #2A5298)', // Smooth gradient
    color: '#ffffff',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
  },
  imageContainer: {
    flex: '1 1 45%',
    maxWidth: '45%',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)',
  },
  image: {
    width: '100%',
    maxHeight: '100vh', // Ensures the full image is visible
    objectFit: 'contain', // Prevents cropping while maintaining aspect ratio
    display: 'block',
    margin: 'auto',
    borderRadius: '10px', // Optional for aesthetics
  },
  textContainer: {
    flex: '1 1 50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  },
  descriptionText: {
    fontSize: '1.1rem',
    opacity: '0.9',
    maxWidth: '80%',
    lineHeight: '1.5',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  loginButton: {
    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', // Green gradient
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-in-out',
    width: '220px',
  },
  guestButton: {
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-in-out',
    width: '220px',
  },
  // Hover effects
  loginButtonHover: {
    transform: 'scale(1.05)',
    background: 'linear-gradient(135deg, #66BB6A, #388E3C)',
  },
  guestButtonHover: {
    transform: 'scale(1.05)',
    background: '#ffffff',
    color: '#2A5298',
  },
};

// Add dynamic hover effects using JavaScript
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
      if (button.style.background.includes("green")) {
        button.style.transform = styles.loginButtonHover.transform;
        button.style.background = styles.loginButtonHover.background;
      } else {
        button.style.transform = styles.guestButtonHover.transform;
        button.style.background = styles.guestButtonHover.background;
        button.style.color = styles.guestButtonHover.color;
      }
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      if (button.innerText === "Login") {
        button.style.background = styles.loginButton.background;
      } else {
        button.style.background = styles.guestButton.background;
        button.style.color = styles.guestButton.color;
      }
    });
  });
});

export default Home;
