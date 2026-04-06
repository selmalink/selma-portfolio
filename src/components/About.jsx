import { useScrollFade } from '../hooks/useScrollFade';

const technicalSkills = [
  { category: 'Languages', skills: ['Python', 'SQL', 'R', 'JavaScript'] },
  { category: 'Data & ML', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'ETL Pipelines', 'OLAP', 'Data Warehousing'] },
  { category: 'Databases', skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Snowflake'] },
  { category: 'Visualization & BI', skills: ['Power BI', 'D3.js', 'Tableau', 'Matplotlib'] },
];

const softSkills = [
  { icon: '🎤', label: 'Storytelling with Data', desc: 'Translating complex analysis into clear, compelling narratives for non-technical audiences.' },
  { icon: '🤝', label: 'Stakeholder Communication', desc: 'Comfortable presenting findings to leadership, cross-functional teams, and external clients.' },
  { icon: '📈', label: 'Sales Mindset', desc: 'Trained in professional sales at Foster. I approach data work with an eye toward what moves the needle for the business.' },
  { icon: '🔍', label: 'Curiosity & Rigor', desc: 'I ask "why" before I ask "how." Good analysis starts with the right question, not the nearest dataset.' },
  { icon: '⚡', label: 'Adaptability', desc: 'Thrived across healthcare AI and CPG sales analytics — I learn the domain fast, then apply the method.' },
];

export default function About() {
  const ref = useScrollFade();

  return (
    <section
      id="about"
      ref={ref}
      className="fade-in-section"
      style={{ backgroundColor: '#0a1628', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={label}>About Me</p>
        <h2 style={{ ...heading, marginBottom: '60px' }}>
          Building with data,<br />communicating with clarity.
        </h2>

        {/* Bio + Technical Skills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px', alignItems: 'start', marginBottom: '72px',
        }}>
          <div>
            <p style={{ ...body, marginBottom: '20px' }}>
              I'm a senior at the University of Washington studying Informatics with a focus in
              Data Science. I build end-to-end data solutions — from warehouses and ETL pipelines
              to dashboards and ML models — and I care deeply about communicating what the data
              actually means.
            </p>
            <p style={{ ...body, marginBottom: '20px' }}>
              Right now I'm interning at Precept Wine & Spirits on the sales analytics team,
              where I build Power BI reporting and inventory forecasting models that directly
              inform territory planning and sell-through strategy. I love being at the intersection
              of data and sales — understanding not just what the numbers say, but how to use them
              to drive a conversation and close a decision.
            </p>
            <p style={body}>
              Before that, I worked on healthcare AI at Cambia Health Solutions. I'm equally
              comfortable in Python, SQL, and a room full of stakeholders.
            </p>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#f0a500', marginTop: '28px', borderRadius: '1px' }} />
          </div>

          {/* Technical Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {technicalSkills.map(group => (
              <div key={group.category}>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '2.5px', textTransform: 'uppercase',
                  color: 'rgba(240, 165, 0, 0.8)', marginBottom: '8px',
                }}>
                  {group.category}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {group.skills.map(skill => (
                    <span key={skill} style={{
                      fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                      color: 'rgba(255,255,255,0.82)',
                      backgroundColor: 'rgba(30, 58, 95, 0.6)',
                      border: '1px solid rgba(42, 79, 128, 0.7)',
                      borderRadius: '4px', padding: '5px 12px',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <p style={{ ...label, marginBottom: '24px' }}>Beyond the Technical</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
          }}>
            {softSkills.map(item => (
              <div key={item.label}
                style={{
                  backgroundColor: '#1e3a5f',
                  border: '1px solid rgba(42, 79, 128, 0.55)',
                  borderRadius: '10px', padding: '24px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '22px', marginBottom: '10px' }}>{item.icon}</div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600,
                  color: '#ffffff', margin: '0 0 8px',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300,
                  color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
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
  color: '#ffffff', letterSpacing: '-0.5px', lineHeight: 1.15,
};
const body = {
  fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300,
  color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, letterSpacing: '0.1px', margin: 0,
};
