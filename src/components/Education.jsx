import { useScrollFade } from '../hooks/useScrollFade';

export default function Education() {
  const ref = useScrollFade();

  return (
    <section
      id="education"
      ref={ref}
      className="fade-in-section"
      style={{ backgroundColor: '#0d1f38', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={label}>Education</p>
        <h2 style={{ ...heading, marginBottom: '52px' }}>Where I'm from.</h2>

        <div style={{
          backgroundColor: '#1e3a5f',
          border: '1px solid rgba(42, 79, 128, 0.55)',
          borderRadius: '12px',
          padding: '48px',
          display: 'flex', gap: '36px', alignItems: 'flex-start', flexWrap: 'wrap',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #f0a500, transparent 55%)',
          }} />

          <div style={{
            width: '68px', height: '68px', borderRadius: '10px',
            backgroundColor: 'rgba(10, 22, 40, 0.5)',
            border: '1px solid rgba(42, 79, 128, 0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ fontSize: '26px' }}>🎓</span>
          </div>

          <div style={{ flex: 1, minWidth: '240px' }}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '12px', marginBottom: '8px',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700,
                  color: '#ffffff', margin: 0, letterSpacing: '-0.3px',
                }}>
                  University of Washington
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500, color: '#f0a500', margin: '6px 0 0' }}>
                  B.S. Informatics — Data Science Focus
                </p>
              </div>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.38)', whiteSpace: 'nowrap' }}>
                Expected June 2026
              </span>
            </div>

            <div style={{ width: '36px', height: '1px', backgroundColor: 'rgba(240,165,0,0.35)', margin: '20px 0' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { label: 'Business Minor', icon: '📈' },
                { label: 'Foster Sales Certificate', icon: '🤝' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'rgba(10, 22, 40, 0.45)',
                  border: '1px solid rgba(42, 79, 128, 0.45)',
                  borderRadius: '6px', padding: '8px 16px',
                }}>
                  <span style={{ fontSize: '14px' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 300,
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '24px 0 0',
            }}>
              Informatics at UW combines data systems, human-centered design, and applied
              programming. The Data Science focus goes deep on machine learning, statistical
              analysis, and data engineering. The Business minor and Foster Sales Certificate
              round out the technical foundation with strategic communication and sales skills —
              making me as comfortable presenting to a VP as writing a SQL query.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const label = {
  fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
  letterSpacing: '3px', textTransform: 'uppercase', color: '#f0a500', marginBottom: '12px',
};
const heading = {
  fontFamily: 'Playfair Display, serif',
  fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700,
  color: '#ffffff', letterSpacing: '-0.5px',
};
