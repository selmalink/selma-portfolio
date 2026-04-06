import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10, 22, 40, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30, 58, 95, 0.6)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '20px',
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.3px',
            }}
          >
            SL
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isActive ? '#f0a500' : 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    letterSpacing: '0.3px',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  onMouseEnter={e => { if (!isActive) e.target.style.color = '#ffffff'; }}
                  onMouseLeave={e => { if (!isActive) e.target.style.color = 'rgba(255,255,255,0.75)'; }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        backgroundColor: '#f0a500',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  borderRadius: '1px',
                  transition: 'all 0.3s ease',
                  transform:
                    menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                    menuOpen && i === 1 ? 'scaleX(0)' :
                    menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                    'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="mobile-only"
            style={{
              paddingBottom: '16px',
              borderTop: '1px solid rgba(30, 58, 95, 0.6)',
              paddingTop: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  color: active === link.href.slice(1) ? '#f0a500' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  padding: '4px 0',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
