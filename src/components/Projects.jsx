import { Link } from 'react-router-dom';
import { useScrollFade } from '../hooks/useScrollFade';
import { projects } from '../data/projects';

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', display: 'flex' }}>
      <div
        style={{
          backgroundColor: '#1e3a5f',
          border: '1px solid rgba(42, 79, 128, 0.55)',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'all 0.28s ease',
          width: '100%',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(240,165,0,0.25)';
          e.currentTarget.style.borderColor = 'rgba(240, 165, 0, 0.35)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'rgba(42, 79, 128, 0.55)';
        }}
      >
        {/* Image / placeholder */}
        <div style={{
          height: '180px', position: 'relative', overflow: 'hidden', flexShrink: 0,
        }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          ) : null}
          <div style={{
            position: project.image ? 'absolute' : 'relative',
            inset: 0, width: '100%', height: '100%',
            background: project.placeholderGradient || 'linear-gradient(135deg, #1e3a5f 0%, #0d1e35 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: project.image ? -1 : 1,
          }}>
            <span style={{ fontSize: '44px', opacity: 0.35 }}>{project.icon}</span>
          </div>
          {project.inProgress && (
            <span style={{
              position: 'absolute', top: '12px', right: '12px', zIndex: 2,
              fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600,
              letterSpacing: '1.5px', textTransform: 'uppercase',
              color: '#0a1628', backgroundColor: '#f0a500',
              borderRadius: '3px', padding: '3px 9px',
            }}>
              In Progress
            </span>
          )}
        </div>

        {/* Card content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 600,
            color: '#ffffff', margin: 0, letterSpacing: '-0.2px', lineHeight: 1.3,
          }}>
            {project.title}
          </h3>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300,
            color: 'rgba(255,255,255,0.58)', lineHeight: 1.72, margin: 0, flexGrow: 1,
          }}>
            {project.shortDescription}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500,
                color: 'rgba(255,255,255,0.6)',
                backgroundColor: 'rgba(10, 22, 40, 0.5)',
                border: '1px solid rgba(42, 79, 128, 0.6)',
                borderRadius: '3px', padding: '3px 8px',
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            paddingTop: '12px', borderTop: '1px solid rgba(42,79,128,0.3)',
          }}>
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#f0a500',
            }}>
              View case study
            </span>
            <span style={{ color: '#f0a500', fontSize: '14px' }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const ref = useScrollFade();

  return (
    <section
      id="projects"
      ref={ref}
      className="fade-in-section"
      style={{ backgroundColor: '#0a1628', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={label}>Projects</p>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '48px', flexWrap: 'wrap', gap: '16px',
        }}>
          <h2 style={heading}>Things I've built.</h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '13px',
            color: 'rgba(255,255,255,0.3)', margin: 0, fontStyle: 'italic',
          }}>
            Click any card for the full case study →
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px', alignItems: 'stretch',
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
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
  color: '#ffffff', letterSpacing: '-0.5px', margin: 0,
};
