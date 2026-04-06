import { useScrollFade } from '../hooks/useScrollFade';

const approaches = [
  {
    icon: '🔍',
    label: 'User Research',
    description:
      'Conducted stakeholder interviews with ICHS Community Access Services staff, synthesized qualitative data to identify recurring pain points around service discovery and navigation.',
  },
  {
    icon: '🗂',
    label: 'Information Architecture',
    description:
      'Redesigned navigation structure and service hierarchy based on user needs, accessibility standards (WCAG), and plain-language health communication frameworks.',
  },
  {
    icon: '🤖',
    label: 'AI/ML Integration',
    description:
      'Researching and prototyping an intelligent service finder to help patients locate appropriate care without requiring medical terminology knowledge.',
  },
];

const contributions = [
  'Led the AI/ML workstream, researching approaches to build an intelligent service recommendation system for patients',
  'Analyzed qualitative interview data from CAS staff to extract patterns in patient confusion and service discovery failures',
  'Contributed to research synthesis across three research questions: service navigation, equity/accessibility, and insurance/eligibility clarity',
  'Supported data-driven decision making for UX prioritization based on evidence from literature review and competitive analysis',
];

const nextSteps = [
  'Complete AI-powered service finder prototype',
  'Conduct usability testing with ICHS staff and patient proxies',
  'Finalize redesigned website prototype in collaboration with UI/UX and SWE teammates',
  'Present final solution to ICHS stakeholders at end of Spring quarter',
];

export default function Capstone() {
  const ref = useScrollFade();

  return (
    <section
      id="capstone"
      ref={ref}
      className="fade-in-section"
      style={{
        backgroundColor: '#080f1e',
        padding: '100px 24px',
        borderTop: '1px solid rgba(30, 58, 95, 0.4)',
        borderBottom: '1px solid rgba(30, 58, 95, 0.4)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#f0a500',
              margin: 0,
            }}
          >
            Capstone Project
          </p>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#f0a500',
              backgroundColor: 'rgba(240, 165, 0, 0.1)',
              border: '1px solid rgba(240, 165, 0, 0.3)',
              borderRadius: '20px',
              padding: '3px 12px',
            }}
          >
            In Progress
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '8px',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
          }}
        >
          ICHS Access & Engagement Redesign
        </h2>

        {/* Meta info */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '64px',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(30, 58, 95, 0.5)',
          }}
        >
          {[
            { label: 'Sponsor', value: 'International Community Health Services (ICHS)' },
            { label: 'My Role', value: 'AI/ML & Data Science' },
            { label: 'Team', value: 'Selma Link, Nikhila Suneel, Riya Kulkarni, Cindy Nguyen, Shradha Shankar' },
          ].map(item => (
            <div key={item.label}>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(240, 165, 0, 0.7)',
                  marginBottom: '4px',
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.8)',
                  margin: 0,
                  fontWeight: 400,
                  maxWidth: '360px',
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Problem + Impact */}
        <div style={{ marginBottom: '72px' }}>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '24px',
            }}
          >
            The Problem
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {/* Problem card */}
            <div
              style={{
                backgroundColor: 'rgba(30, 58, 95, 0.35)',
                border: '1px solid rgba(42, 79, 128, 0.5)',
                borderRadius: '10px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px' }}>⚠️</span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  Problem
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.78)',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                The ICHS website makes it hard for patients to find services independently. Confusing
                navigation, language barriers, low digital literacy support, and unclear
                insurance/eligibility information push patients toward phone calls — overloading
                clinic staff and creating inequitable access for vulnerable communities.
              </p>
            </div>

            {/* Impact card */}
            <div
              style={{
                backgroundColor: 'rgba(30, 58, 95, 0.35)',
                border: '1px solid rgba(42, 79, 128, 0.5)',
                borderRadius: '10px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px' }}>📊</span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  Impact
                </span>
              </div>
              <ul
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.78)',
                  lineHeight: 1.75,
                  margin: 0,
                  paddingLeft: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <li>Patients struggle to find care independently</li>
                <li>More patients rely on phone support</li>
                <li>Clinic staff face increased call volume</li>
                <li>Access becomes harder for multilingual, older, and low-tech users</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div style={{ marginBottom: '72px' }}>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '24px',
            }}
          >
            Our Approach
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {approaches.map(item => (
              <div
                key={item.label}
                style={{
                  backgroundColor: 'rgba(10, 22, 40, 0.5)',
                  border: '1px solid rgba(42, 79, 128, 0.4)',
                  borderRadius: '10px',
                  padding: '28px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: '0 0 10px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.72,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* My Contributions */}
        <div style={{ marginBottom: '72px' }}>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '24px',
            }}
          >
            My Individual Contributions
          </h3>

          <div
            style={{
              backgroundColor: 'rgba(30, 58, 95, 0.25)',
              border: '1px solid rgba(42, 79, 128, 0.45)',
              borderRadius: '10px',
              padding: '32px',
              borderLeft: '3px solid #f0a500',
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contributions.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      color: '#f0a500',
                      fontSize: '16px',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    ›
                  </span>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Takeaway */}
        <div style={{ marginBottom: '72px' }}>
          <blockquote
            style={{
              margin: 0,
              padding: '36px 40px',
              backgroundColor: 'rgba(240, 165, 0, 0.05)',
              border: '1px solid rgba(240, 165, 0, 0.2)',
              borderLeft: '3px solid #f0a500',
              borderRadius: '10px',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '16px',
                left: '28px',
                fontFamily: 'Playfair Display, serif',
                fontSize: '64px',
                color: 'rgba(240, 165, 0, 0.15)',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              "
            </span>
            <p
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(17px, 2.5vw, 21px)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.7,
                margin: '20px 0 0',
              }}
            >
              Working directly with a real community health sponsor taught me how to balance
              technical ambition with the practical constraints of a mission-driven organization.
              The most impactful solutions here aren't the most complex ones — they're the ones
              that reduce friction for users who are already navigating significant barriers.
            </p>
            <footer
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'rgba(240, 165, 0, 0.7)',
                marginTop: '16px',
                fontWeight: 500,
                letterSpacing: '0.5px',
              }}
            >
              — Key Takeaway So Far
            </footer>
          </blockquote>
        </div>

        {/* Next Steps */}
        <div>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '24px',
            }}
          >
            Next Steps
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              backgroundColor: 'rgba(10, 22, 40, 0.5)',
              border: '1px solid rgba(42, 79, 128, 0.4)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {nextSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  padding: '18px 28px',
                  borderBottom: i < nextSteps.length - 1 ? '1px solid rgba(42, 79, 128, 0.35)' : 'none',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(240, 165, 0, 0.1)',
                    border: '1px solid rgba(240, 165, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#f0a500',
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.75)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
