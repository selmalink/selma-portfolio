import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.35 + 0.06,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 165, 0, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const handleResize = () => { resize(); createParticles(); };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0d1e35',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 80% at 50% 40%, rgba(30, 58, 95, 0.55) 0%, transparent 70%)',
      }} />
      <canvas ref={canvasRef} style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '110px 24px 70px', maxWidth: '820px', margin: '0 auto',
      }}>

        {/* Photo — large, sharp */}
        <div style={{
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '36px',
          flexShrink: 0,
          border: '3px solid rgba(240, 165, 0, 0.55)',
          boxShadow: '0 0 0 10px rgba(240,165,0,0.06), 0 24px 64px rgba(0,0,0,0.55)',
          /* Force crisp rendering — no downscale blur */
          imageRendering: 'auto',
          transform: 'translateZ(0)', /* GPU layer for sharper render */
          willChange: 'transform',
        }}>
          <img
            src="/headshot.jpg"
            alt="Selma Link"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 10%',
              display: 'block',
              /* Prevent browser from applying aggressive compression */
              imageRendering: 'auto',
            }}
          />
        </div>

        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
          letterSpacing: '3.5px', textTransform: 'uppercase',
          color: '#f0a500', marginBottom: '14px',
        }}>
          Hi, I'm
        </p>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(54px, 9vw, 90px)',
          fontWeight: 700, color: '#ffffff',
          letterSpacing: '-2px', lineHeight: 1.0,
          margin: '0 0 22px',
        }}>
          Selma Link
        </h1>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(16px, 2.2vw, 19px)',
          fontWeight: 300, color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.65, maxWidth: '500px',
          margin: '0 0 10px', letterSpacing: '0.1px',
        }}>
          Data scientist and analyst who turns messy data into clear decisions —
        </p>
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(17px, 2.5vw, 22px)',
          fontWeight: 400, fontStyle: 'italic',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.5, maxWidth: '440px',
          margin: '0 0 52px',
        }}>
          and knows how to sell the story.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => scrollTo('projects')}
            style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600,
              color: '#0d1e35', backgroundColor: '#f0a500', border: 'none',
              borderRadius: '6px', padding: '14px 32px', cursor: 'pointer',
              letterSpacing: '0.2px', transition: 'all 0.2s ease',
              boxShadow: '0 4px 20px rgba(240, 165, 0, 0.3)',
            }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#f5bc40'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 28px rgba(240,165,0,0.42)'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = '#f0a500'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px rgba(240,165,0,0.3)'; }}
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download
            style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600,
              color: '#ffffff', backgroundColor: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.28)', borderRadius: '6px',
              padding: '14px 32px', cursor: 'pointer', textDecoration: 'none',
              letterSpacing: '0.2px', transition: 'all 0.2s ease', display: 'inline-block',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.65)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.28)'; e.target.style.backgroundColor = 'transparent'; e.target.style.transform = 'translateY(0)'; }}
          >
            Download Resume
          </a>
        </div>

        <div style={{ marginTop: '72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.3 }}>
          <span style={{ fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
