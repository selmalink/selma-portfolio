import { useScrollFade } from '../hooks/useScrollFade';

export default function Contact() {
  const ref = useScrollFade();

  return (
    <section
      id="contact"
      ref={ref}
      className="fade-in-section"
      style={{
        backgroundColor: '#0d1e35',
        padding: '100px 24px 64px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
            letterSpacing: '3px', textTransform: 'uppercase', color: '#f0a500', marginBottom: '12px',
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700,
            color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.5px',
          }}>
            Let's work together.
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300,
            color: 'rgba(255,255,255,0.55)', maxWidth: '420px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Open to full-time roles in data science, analytics, and ML engineering
            starting Summer 2026.
          </p>
        </div>

        <div style={{
          display: 'flex', gap: '14px', justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: '80px',
        }}>
          <ContactLink href="mailto:selmalink@gmail.com" icon="✉" label="selmalink@gmail.com" />
          <ContactLink href="tel:+12062952425" icon="📞" label="206-295-2425" />
          <a
            href="https://www.linkedin.com/in/selmalink"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600,
              color: '#0d1e35', backgroundColor: '#f0a500',
              border: '1px solid #f0a500', borderRadius: '8px',
              padding: '13px 24px', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f5bc40'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f0a500'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400,
            color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(42, 79, 128, 0.4)', borderRadius: '8px',
            padding: '13px 24px',
          }}>
            <span>📍</span> Seattle, WA
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(30, 58, 95, 0.4)',
          paddingTop: '32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{
            fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700,
            color: 'rgba(255,255,255,0.3)', letterSpacing: '-0.3px',
          }}>
            Selma Link
          </span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.25)',
          }}>
            © 2026 · Built with React + Vite
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500,
        color: 'rgba(255,255,255,0.85)',
        backgroundColor: 'rgba(30, 58, 95, 0.5)',
        border: '1px solid rgba(42, 79, 128, 0.5)',
        borderRadius: '8px', padding: '13px 24px', textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,165,0,0.5)'; e.currentTarget.style.backgroundColor = 'rgba(30,58,95,0.7)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(42,79,128,0.5)'; e.currentTarget.style.backgroundColor = 'rgba(30,58,95,0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span style={{ fontSize: '15px' }}>{icon}</span>
      {label}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
