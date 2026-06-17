import { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <title>Thank You | ATL Podcast Pros</title>
      <meta name="robots" content="noindex, nofollow" />

      {/* Confirmation section */}
      <div style={{
        background: '#1A1A1A',
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '40px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <img
          src="/assets/images/LogoAPPWhiteATL.png"
          alt="ATL Podcast Pros"
          style={{ height: '50px', display: 'block', margin: '0 auto 24px', objectFit: 'contain' }}
        />

        {/* Green checkmark SVG */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', margin: '0 auto 20px' }}
        >
          <circle cx="24" cy="24" r="24" fill="#4CAF50" />
          <path
            d="M14 24.5L20.5 31L34 18"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '36px',
          color: '#FFFFFF',
          letterSpacing: '0.05em',
          margin: '0 0 16px',
        }}>
          You're All Set
        </h1>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: '16px',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '480px',
          margin: '0 auto',
          lineHeight: '1.7',
        }}>
          Thank you for reaching out to ATL Podcast Pros. Pick a time below that works for you and we will talk through your podcast goals. We look forward to speaking with you.
        </p>
      </div>

      {/* Calendar embed section */}
      <div style={{ background: '#FFFFFF', width: '100%', minHeight: '700px' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/Z9ZcWHCcJobfpeM0Z3oy"
          style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', display: 'block' }}
          scrolling="no"
          id="Z9ZcWHCcJobfpeM0Z3oy_1781662845256"
        />
      </div>
    </>
  );
}
