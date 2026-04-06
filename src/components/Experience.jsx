import { useScrollFade } from '../hooks/useScrollFade';

const experiences = [
  {
    title: 'Data Science & Sales Strategy Intern',
    company: 'Precept Wine & Spirits',
    period: 'Jan 2026 – Present',
    current: true,
    description: 'Supporting the sales team with Power BI reporting, inventory forecasting, and data-driven territory analysis. I sit at the intersection of data and sales strategy — translating depletion data and market trends into insights the team can actually act on. This role has sharpened my understanding of how data needs to be packaged differently for a sales audience than a technical one.',
    skills: ['Power BI', 'SQL', 'Python', 'Forecasting', 'Sales Analytics', 'Stakeholder Reporting'],
  },
  {
    title: 'Machine Learning Scientist Intern',
    company: 'Cambia Health Solutions',
    period: 'Jun 2025 – Sep 2025',
    current: false,
    description: 'Worked on healthcare AI initiatives, developing and evaluating ML models to improve clinical decision support and operational efficiency. Collaborated with cross-functional teams to communicate model outputs to non-technical stakeholders — making sure the "why" was as clear as the results.',
    skills: ['Python', 'Scikit-learn', 'Healthcare AI', 'ML Modeling', 'Data Pipelines', 'Stakeholder Communication'],
  },
  {
    title: 'Undergraduate Teaching Assistant',
    company: 'UW Information School',
    period: 'Jan 2026 – Mar 2026',
    current: false,
    description: 'Supported data-focused Informatics coursework through office hours, grading, and one-on-one student mentorship. Helped students navigate both technical debugging and the broader skill of thinking analytically about data problems.',
    skills: ['Teaching', 'Mentorship', 'Data Analysis', 'Communication'],
  },
];

export default function Experience() {
  const ref = useScrollFade();

  return (
    <section
      id="experience"
      ref={ref}
      className="fade-in-section"
      style={{ backgroundColor: '#0d1f38', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={label}>Experience</p>
        <h2 style={{ ...heading, marginBottom: '64px' }}>Where I've worked.</h2>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div style={{
            position: 'absolute', left: '7px', top: '8px', bottom: '8px',
            width: '1px', backgroundColor: 'rgba(42, 79, 128, 0.5)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-28px', top: '6px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  backgroundColor: exp.current ? '#f0a500' : '#0d1f38',
                  border: `2px solid ${exp.current ? '#f0a500' : 'rgba(42, 79, 128, 0.7)'}`,
                  boxShadow: exp.current ? '0 0 14px rgba(240, 165, 0, 0.45)' : 'none',
                }} />

                <div>
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: '8px', marginBottom: '6px',
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '19px', fontWeight: 600,
                        color: '#ffffff', margin: 0, letterSpacing: '-0.2px',
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, color: '#f0a500', margin: '4px 0 0' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.2px' }}>
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600,
                          letterSpacing: '1.5px', textTransform: 'uppercase',
                          color: '#0a1628', backgroundColor: '#f0a500',
                          borderRadius: '3px', padding: '2px 8px',
                        }}>
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300,
                    color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, margin: '12px 0 16px',
                  }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {exp.skills.map(skill => (
                      <span key={skill} style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
                        color: 'rgba(240, 165, 0, 0.8)',
                        backgroundColor: 'rgba(240, 165, 0, 0.07)',
                        border: '1px solid rgba(240, 165, 0, 0.2)',
                        borderRadius: '3px', padding: '3px 10px',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
  color: '#ffffff', letterSpacing: '-0.5px',
};
