import { useState, useEffect } from 'react';

export default function ClientPasswordGate({ slug, correctPassword, children }) {
  const storageKey = `client_auth_${slug}`;
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored === 'true') setAuthenticated(true);
  }, [storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      sessionStorage.setItem(storageKey, 'true');
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setInput('');
      setTimeout(() => setShake(false), 600);
    }
  };

  if (authenticated) return children;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1A1A1A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        background: '#111111',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <img
          src="/LogoAPPWhiteATL.png"
          alt="ATL Podcast Pros"
          style={{ height: '60px', marginBottom: '32px', objectFit: 'contain' }}
        />
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '28px',
          color: '#FFFFFF',
          marginBottom: '8px',
          letterSpacing: '0.05em'
        }}>
          Client Portal
        </h1>
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '32px'
        }}>
          This page is private. Enter your access code to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter access code"
            autoFocus
            style={{
              width: '100%',
              padding: '14px 16px',
              background: 'rgba(255,255,255,0.06)',
              border: error ? '1px solid #A61E31' : '1px solid rgba(255,255,255,0.12)',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontFamily: "'Lato', sans-serif",
              fontSize: '15px',
              marginBottom: '8px',
              outline: 'none',
              transition: 'border 0.2s',
              animation: shake ? 'shake 0.4s ease' : 'none'
            }}
          />
          {error && (
            <p style={{
              color: '#A61E31',
              fontSize: '13px',
              fontFamily: "'Lato', sans-serif",
              marginBottom: '12px',
              textAlign: 'left'
            }}>
              Incorrect access code. Please try again.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: '#A61E31',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '600',
              fontSize: '14px',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#C73248'}
            onMouseOut={(e) => e.target.style.background = '#A61E31'}
          >
            ACCESS PAGE
          </button>
        </form>
        <p style={{
          marginTop: '24px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.25)',
          fontFamily: "'Lato', sans-serif"
        }}>
          Contact info@atlpodcastpros.com if you need access
        </p>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        input:focus {
          border-color: rgba(255,255,255,0.3) !important;
        }
      `}</style>
    </div>
  );
}
