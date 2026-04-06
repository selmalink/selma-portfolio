export const projects = [
  {
    id: 'climate-data-warehouse',
    title: 'Climate Data Warehouse',
    shortDescription:
      'Built a dimensional data warehouse in SQL Server to analyze global greenhouse gas emissions (2000–2018). Designed a star schema, wrote a Python ETL pipeline, and used OLAP/window functions to surface renewable energy transition trends.',
    tags: ['SQL', 'Python', 'ETL', 'Data Warehousing', 'OLAP'],
    icon: '🌍',
    inProgress: false,
    image: '/images/climate-project.jpg',  /* drop your image here */
    placeholderGradient: 'linear-gradient(135deg, #0d2d1a 0%, #1a4a2e 50%, #0d1e35 100%)',
    detail: {
      goals: `Design and implement a dimensional data warehouse to analyze global greenhouse gas emissions, renewable energy adoption, and country-level economic indicators over time. The objective was to transform fragmented climate datasets into a structured analytical system capable of supporting multi-dimensional trend analysis across countries, sectors, gas types, and income groups.`,
      role: `Data modeling, ETL development, and analytical querying. I defined the grain of the warehouse, designed the star schema, built a reproducible Python ETL pipeline to clean and load raw datasets, and wrote complex SQL queries to analyze emissions intensity, regional patterns, and renewable energy transitions.`,
      problem: `Global climate datasets are distributed across multiple sources with inconsistent aggregation levels, missing reporting periods, and varying category definitions. Without a unified schema, analyzing emissions by country, sector, or gas type risks duplication errors and inconsistent results. The opportunity was to centralize these datasets into a dimensional warehouse that ensures data integrity while enabling flexible, scalable analytics across time and geography.`,
      process: [
        {
          title: 'Data Preparation',
          body: 'Performed extensive cleaning and normalization across multiple raw datasets. Standardized country-year records, aligned categorical dimensions, handled missing renewable reporting windows, and structured data to maintain a consistent country–year analytical grain.',
        },
        {
          title: 'Dimensional Modeling',
          body: 'Designed a star schema centered on an emissions fact table with dimensions for country, time, sector, gas, income group, and data source. Built a secondary fact table for country-level statistics such as GDP, population, renewable energy share, and primary energy consumption to enable per-capita and emissions intensity analysis while preventing double counting.',
        },
        {
          title: 'ETL Pipeline',
          body: 'Developed a Python-based ETL (Extract, Load, and Transform) pipeline to extract raw CSV files, validate records, transform fields, enforce schema consistency, and load structured tables into the warehouse. The pipeline ensured reproducibility and minimized manual preprocessing errors.',
        },
        {
          title: 'Analytical Querying',
          body: 'Wrote SQL queries to compare emissions trends across regions and income groups, calculate emissions per capita and intensity relative to GDP, analyze renewable energy adoption between 2000 and 2018, identify high-emission sectors by country, and evaluate reporting coverage gaps across datasets. These queries demonstrated the warehouse\'s ability to support complex, multi-dimensional climate analytics.',
        },
      ],
      outcome: `Delivered a fully functional dimensional warehouse capable of supporting scalable emissions and energy analysis. The architecture allows for flexible slicing by geography, time, sector, and gas type. Future enhancements include integrating BI dashboards, automating incremental data updates, and deploying the pipeline in a cloud environment for production-level scalability.`,
      takeaways: `Strengthened expertise in dimensional modeling, defining fact table grain, preventing aggregation errors, writing advanced SQL for analytical queries, and building reproducible ETL pipelines that transform raw data into structured analytical infrastructure.`,
      note: 'Still brainstorming how I will show my ELT process and queries!',
    },
  },
  {
    id: 'imdb-analytics',
    title: 'IMDb Top 250 Analytics',
    shortDescription:
      'Designed and queried a MongoDB document database on 26 years of IMDb rankings (6,500 documents, 744 unique films). Built 5 aggregation pipelines to analyze genre quality, director influence, critic vs. audience divergence, and decade trends.',
    tags: ['MongoDB', 'NoSQL', 'Python', 'Pandas', 'Data Analysis'],
    icon: '🎬',
    inProgress: false,
    image: '/images/imdb-project.jpg',  /* drop your image here */
    placeholderGradient: 'linear-gradient(135deg, #1a0d2e 0%, #2d1a4a 50%, #0d1e35 100%)',
    detail: {
      goals: `Explore 26 years of IMDb Top 250 ranking data to uncover patterns in film quality, genre trends, directorial influence, and the divergence between critical acclaim and audience reception. The goal was to demonstrate advanced NoSQL querying and data aggregation techniques on a real-world document dataset.`,
      role: `Database design, data ingestion, aggregation pipeline development, and analytical interpretation. I structured the document schema, loaded 6,500+ records into MongoDB, and designed all five aggregation pipelines to answer specific analytical questions.`,
      problem: `Film ranking data is inherently temporal and multi-dimensional — the same film can appear across many years with shifting rankings, rating distributions, and audience reception. Relational models struggle with the nested, variable-length nature of this data. The opportunity was to use a document model that matches the natural structure of film metadata while enabling flexible aggregation.`,
      process: [
        {
          title: 'Data Collection & Schema Design',
          body: 'Collected 26 years of IMDb Top 250 snapshots resulting in 6,500 documents covering 744 unique films. Designed a document schema to capture ranking history, ratings, genre tags, director credits, runtime, and release year within each document.',
        },
        {
          title: 'Aggregation Pipeline Development',
          body: 'Built 5 MongoDB aggregation pipelines: (1) Genre quality analysis — average rating and ranking stability by genre; (2) Director influence — directors with most consistent Top 250 presence; (3) Critic vs. audience divergence — gap between IMDb rating and ranking position over time; (4) Decade trend analysis — how the composition of the Top 250 shifts across decades; (5) Ranking volatility — films with the most movement in and out of the list.',
        },
        {
          title: 'Python & Pandas Integration',
          body: 'Exported aggregation results to Pandas for further transformation and visualization. Used Python scripts to automate the data loading pipeline and ensure consistent document formatting across all 6,500 records.',
        },
      ],
      outcome: `Delivered a fully queryable film analytics database with reusable aggregation pipelines. The analysis revealed meaningful patterns in how genre preferences, directorial reputations, and decade-based nostalgia influence what films maintain long-term critical standing on the Top 250.`,
      takeaways: `Deepened understanding of document-oriented data modeling, MongoDB aggregation syntax, and how to structure analytical questions as pipeline stages. Reinforced when NoSQL is the right tool — specifically for hierarchical, variable-length data that would require complex JOINs in a relational model.`,
    },
  },
  {
    id: 'tennis-dominance',
    title: 'Evolution of Dominance in Tennis',
    shortDescription:
      'Interactive scroll-driven data story exploring how professional tennis has shifted in play style, surfaces, and player dominance over decades. Combines rigorous data analysis with narrative-first visual design.',
    tags: ['D3.js', 'Interactive Viz', 'Storytelling', 'JavaScript'],
    icon: '🎾',
    inProgress: false,
    image: '/images/tennis-project.jpg',  /* drop your image here */
    placeholderGradient: 'linear-gradient(135deg, #0d1e35 0%, #1a3a1a 50%, #2d4a0d 100%)',
    detail: {
      goals: `Create an interactive, scroll-driven data story that explores how professional tennis has evolved over the past several decades — examining shifts in dominant players, playing surfaces, game pace, and rally patterns. The goal was to combine data analysis with narrative design to make the story accessible to both tennis fans and data-curious audiences.`,
      role: `Data collection, analysis, narrative structure, and all front-end visualization development. I wrote the story arc, chose the visual encodings, and built the full interactive experience using D3.js and JavaScript.`,
      problem: `Sports data is often presented as raw statistics without narrative context. The richness of tennis history — the surface wars, the Big Three era, the tactical evolution of serve-and-volley to baseline dominance — gets lost in static tables. The opportunity was to use scrollytelling to let the data unfold like a story rather than a report.`,
      process: [
        {
          title: 'Data Collection & Analysis',
          body: 'Sourced historical ATP match data spanning multiple decades. Cleaned and aggregated statistics on surface win rates, match duration trends, serve speed distributions, and year-end ranking histories for top players.',
        },
        {
          title: 'Narrative Architecture',
          body: 'Structured the story in four acts: the surface era wars (grass vs. clay dominance), the rise of baseline power tennis, the Big Three phenomenon, and emerging challengers. Each section transitions using scroll-triggered D3 animations.',
        },
        {
          title: 'Interactive Visualization',
          body: 'Built scroll-driven transitions using the Intersection Observer API and D3.js. Each visual — including line charts, small multiples, and dot plots — updates in response to the user\'s position in the narrative, creating a cohesive reading experience.',
        },
      ],
      outcome: `Delivered a fully interactive scrollytelling piece that guides readers through the data while letting them explore at their own pace. The project demonstrated that data visualization can carry emotional narrative weight, not just analytical information.`,
      takeaways: `Learned that the hardest part of data storytelling is not the visualization — it is deciding what to leave out. Constraint and sequencing are what turn data into a story. Also deepened D3.js proficiency significantly, especially around transitions and data joins.`,
    },
  },
  {
    id: 'ichs-redesign',
    title: 'ICHS Access & Engagement Redesign',
    shortDescription:
      'Redesigning the digital patient experience for International Community Health Services (ICHS), a Seattle-based federally qualified health center serving multilingual and underserved communities.',
    tags: ['UX Research', 'AI/ML', 'Healthcare', 'Information Architecture'],
    icon: '🏥',
    inProgress: true,
    image: '/images/ichs-project.jpg',  /* drop your image here */
    placeholderGradient: 'linear-gradient(135deg, #1e1a0d 0%, #2e2a1e 50%, #0d1e35 100%)',
    detail: {
      goals: `Redesign the ICHS patient-facing digital experience to make it easier for multilingual, low-digital-literacy, and underserved patients to independently find services, understand eligibility, and navigate care — reducing reliance on phone support and improving equitable access.`,
      role: `AI/ML & Data Science lead. Responsible for researching and prototyping an intelligent service recommendation system, analyzing qualitative interview data, and contributing to research synthesis across the team's three core research questions.`,
      problem: `The ICHS website makes it hard for patients to find services independently. Confusing navigation, language barriers, low digital literacy support, and unclear insurance/eligibility information push patients toward phone calls — overloading clinic staff and creating inequitable access for vulnerable communities including multilingual, older, and low-tech users.`,
      process: [
        {
          title: 'Stakeholder Research',
          body: 'Conducted and analyzed interviews with ICHS Community Access Services (CAS) staff to identify recurring patient pain points. Synthesized qualitative data to map failure modes in service discovery: patients using incorrect terminology, inability to self-triage, and confusion about insurance eligibility.',
        },
        {
          title: 'Information Architecture Redesign',
          body: 'Collaborated with UI/UX teammates to rebuild the service taxonomy and navigation structure based on user mental models rather than internal clinic organization. Applied WCAG accessibility standards and plain-language health communication frameworks throughout.',
        },
        {
          title: 'AI/ML Service Finder Research',
          body: 'Researching and prototyping an intelligent service recommendation system that allows patients to describe their needs in plain language — without knowing the correct medical terminology — and receive accurate service suggestions. Evaluating retrieval-augmented approaches and intent classification models appropriate for a low-resource, multilingual deployment context.',
        },
      ],
      outcome: `Project is in progress through Spring quarter 2026. Current deliverables include a redesigned information architecture, a research synthesis document covering service navigation, equity/accessibility, and insurance clarity, and an in-progress AI service finder prototype. Final solution will be presented to ICHS stakeholders at end of Spring quarter.`,
      takeaways: `Working directly with a real community health sponsor taught me how to balance technical ambition with the practical constraints of a mission-driven organization. The most impactful solutions here aren't the most complex ones — they're the ones that reduce friction for users who are already navigating significant barriers.`,
      note: 'Project is ongoing through Spring 2026.',
    },
  },
];
