import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0a1628', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'white', fontFamily: 'DM Sans, sans-serif', marginBottom: '16px' }}>Project not found.</p>
          <Link to="/" style={{ color: '#f0a500' }}>← Back home</Link>
        </div>
      </div>
    );
  }

  const { detail } = project;

  return (
    <div style={{ backgroundColor: '#0a1628', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      {/* Back nav */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'rgba(10, 22, 40, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(30, 58, 95, 0.5)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: '64px', gap: '16px' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.65)',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              padding: '6px 12px 6px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
          >
            <span style={{ fontSize: '18px', lineHeight: 1 }}>←</span>
            Back to Portfolio
          </button>
          <span style={{ color: 'rgba(30, 58, 95, 0.9)', fontSize: '18px' }}>|</span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {project.title}
          </span>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(160deg, #0d1e35 0%, #0a1628 50%, #07101e 100%)',
          paddingTop: '120px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          borderBottom: '1px solid rgba(30, 58, 95, 0.4)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(30,58,95,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '32px' }}>{project.icon}</span>
            {project.inProgress && (
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
                letterSpacing: '1.5px', textTransform: 'uppercase', color: '#f0a500',
                backgroundColor: 'rgba(240, 165, 0, 0.1)', border: '1px solid rgba(240, 165, 0, 0.3)',
                borderRadius: '20px', padding: '3px 12px',
              }}>
                In Progress
              </span>
            )}
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 20px',
            letterSpacing: '-1px',
            lineHeight: 1.1,
          }}>
            {project.title}
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            margin: '0 0 32px',
            maxWidth: '640px',
          }}>
            {project.shortDescription}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                color: 'rgba(240, 165, 0, 0.9)', backgroundColor: 'rgba(240, 165, 0, 0.08)',
                border: '1px solid rgba(240, 165, 0, 0.25)', borderRadius: '4px', padding: '5px 12px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '72px 24px 100px' }}>

        {/* Goals */}
        <DetailSection label="Goals of the Project" icon="🎯">
          <p style={bodyStyle}>{detail.goals}</p>
        </DetailSection>

        {/* My Role */}
        <DetailSection label="My Role" icon="👤">
          <p style={bodyStyle}>{detail.role}</p>
        </DetailSection>

        {/* Problem */}
        <DetailSection label="Problem or Opportunity" icon="⚡">
          <div style={{
            backgroundColor: 'rgba(30, 58, 95, 0.25)',
            border: '1px solid rgba(42, 79, 128, 0.4)',
            borderLeft: '3px solid rgba(240, 165, 0, 0.6)',
            borderRadius: '8px',
            padding: '24px 28px',
          }}>
            <p style={{ ...bodyStyle, margin: 0 }}>{detail.problem}</p>
          </div>
        </DetailSection>

        {/* Process */}
        <DetailSection label="Process and Solution" icon="🔧">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {detail.process.map((step, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(10, 22, 40, 0.5)',
                border: '1px solid rgba(42, 79, 128, 0.35)',
                borderRadius: '8px',
                padding: '24px 28px',
                display: 'flex',
                gap: '16px',
              }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  backgroundColor: 'rgba(240, 165, 0, 0.12)', border: '1px solid rgba(240, 165, 0, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px',
                }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#f0a500' }}>
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600,
                    color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.1px',
                  }}>
                    {step.title}
                  </p>
                  <p style={{ ...bodyStyle, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </DetailSection>

        {/* Outcome */}
        <DetailSection label="Outcome and Next Steps" icon="📈">
          <p style={bodyStyle}>{detail.outcome}</p>
        </DetailSection>

        {/* Takeaways */}
        <DetailSection label="Key Takeaways" icon="💡">
          <blockquote style={{
            margin: 0,
            padding: '28px 32px',
            backgroundColor: 'rgba(240, 165, 0, 0.04)',
            border: '1px solid rgba(240, 165, 0, 0.15)',
            borderLeft: '3px solid #f0a500',
            borderRadius: '8px',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif', fontSize: '18px', fontStyle: 'italic',
              color: 'rgba(255,255,255,0.85)', lineHeight: 1.72, margin: 0,
            }}>
              {detail.takeaways}
            </p>
          </blockquote>
        </DetailSection>

        {/* Note if present */}
        {detail.note && (
          <div style={{
            marginTop: '48px',
            padding: '16px 20px',
            backgroundColor: 'rgba(240, 165, 0, 0.06)',
            border: '1px dashed rgba(240, 165, 0, 0.3)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ fontSize: '16px' }}>📝</span>
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400,
              color: 'rgba(240, 165, 0, 0.8)', margin: 0, fontStyle: 'italic',
            }}>
              {detail.note}
            </p>
          </div>
        )}

        {/* Bottom nav */}
        <div style={{
          marginTop: '80px', paddingTop: '40px',
          borderTop: '1px solid rgba(30, 58, 95, 0.4)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'none', border: '1.5px solid rgba(42, 79, 128, 0.6)',
              color: 'rgba(255,255,255,0.7)', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500,
              padding: '10px 20px', borderRadius: '6px', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,165,0,0.5)'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(42,79,128,0.6)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          >
            ← Back to Portfolio
          </button>

          {/* Next project */}
          {(() => {
            const idx = projects.findIndex(p => p.id === id);
            const next = projects[(idx + 1) % projects.length];
            return (
              <Link
                to={`/project/${next.id}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: '#f0a500', textDecoration: 'none',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Next: {next.title} →
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

function DetailSection({ label, icon, children }) {
  return (
    <div style={{ marginBottom: '56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span style={{ fontSize: '18px' }}>{icon}</span>
        <h2 style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)', margin: 0,
        }}>
          {label}
        </h2>
      </div>
      {children}
    </div>
  );
}

const bodyStyle = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '16px',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.8,
  margin: '0 0 16px',
};
