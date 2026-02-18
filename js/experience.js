export const experiences = [
  {
  title: "Co-Founder & Chief Technology Officer",
  company: "HiveWell LLC",
    period: "2024-Present",
    description: [
  "Architected and built production-ready enterprise SaaS platform from concept to deployment: 100+ React components, 20+ API endpoints, 42-table PostgreSQL database with 3,093+ assessment records.",
      "Solo-built with VS Code and GitHub Copilot using multi-agent architecture (10 specialized agents for cross-domain validation and quality assurance).",
      "Frontend stack: Next.js 16 (App Router, Turbopack), React 19 (Server Components), TypeScript 5 (strict mode, 0 errors), Tailwind CSS, CSS Modules, 123 CSS custom properties (94% design system adoption).",
      "Backend stack: Python 3.11 (async/await), FastAPI 0.104+ (OpenAPI/Swagger docs), Pydantic 2.5+ (validation), Uvicorn (ASGI server), JWT authentication, ReportLab (6-page PDF reports, 100% generation success).",
      "Data & infrastructure: PostgreSQL 14+ (42 tables, UUID primary keys, JSONB columns), Railway deployment (Docker container, managed database, 5GB volume storage), Vercel (frontend pending), Resend API (email delivery, domain verified).",
      "Built multi-role assessment engine supporting 8 distinct assessments (164 questions total) with 3-tier response weighting achieving 97% validation accuracy across 4 user roles (Individual Contributor, People Leader, Decision Maker, HR).",
      "Developed comprehensive admin analytics dashboard: 3 main pages, 9 tabs of visualizations, 8 chart types (line, bar, heatmap, role distribution), real-time auto-refresh (10-second intervals), advanced filtering (company, partner, date ranges).",
      "Implemented automated PDF report generation system: 6-page stakeholder reports with token-based secure downloads, 100% generation success rate (10/10 backend tests), professional design validated by stakeholders.",
      "Established production deployment infrastructure: Railway (Docker + PostgreSQL + 5GB volume), Resend API integration (hello@joinhivewell.com), environment management (dev/staging/production), automatic daily database backups.",
      "Improved development velocity by 60% through section-based architecture (100+ reusable components), design system enforcement (123 CSS variables with validation scripts), and multi-agent quality gates (TypeScript 0 errors, ESLint compliance).",
      "Documented entire system: 93 comprehensive docs (API endpoints, database schema, multi-agent architecture, admin roadmap), clear setup guides, data diagrams, and stakeholder references.",
      "Current status: Production-ready platform deployed on Railway; frontend deployment to Vercel pending; pilot launch targeted Q1 2026."
    ],
  url: "https://www.linkedin.com/company/joinhivewell/"
  },
  {
    title: "Data & Full-Stack Developer",
    company: "Freelance",
    period: "2023-Present",
    description: [
      "Developed a Live Data Visualizer dashboard using Streamlit, FastAPI, and MCP to integrate real-time stock, weather, and news data for business analytics.",
      "Designed and implemented data pipelines using Google Cloud to automate data collection and processing for a medical staffing company.",
      "Built interactive dashboards to visualize key metrics, enabling data-driven prioritization of job targeting and workflow optimization.",
      "Developed a Retrieval-Augmented Generation (RAG) AI Agent for small businesses to draft personalized email responses.",
      "Building a predictive model for the upcoming NCAA March Madness tournament using machine learning techniques.",
      "Built an ATS-friendly Resume Generator using Python (pandas, ReportLab) to format and structure resumes based on CSV data.",
      "Developed Common Core Math Worksheet Generator (Flask/pandas/ReportLab) for K-5 educational resources.",
      "Developed an AI-powered Voicemail & Call Categorizer using Streamlit, OpenAI Whisper, and NLP (spaCy, Regex) to transcribe and organize client calls for business action. Pitched for integration with stakeholder systems.",
      "Built an AI-powered semantic job search engine over 100K US postings using multi-vector FAISS search, GPT-4o-mini cross-title matching, haversine geo-distance filtering, and conversational refinement — achieving 95% Precision@5.",
    ],
  },
  {
    title: "Data Analyst/ BI Consultant",
    company: "Ann Fagelson Government Seminars",
    period: "2023-Present",
    description: [
      "Built interactive dashboards using Tableau/Power BI to track key seminar metrics like registration, attendance, and satisfaction.",
      "Developed forecasting models to predict seminar attendance and resource needs, helping to plan both virtual and on-site sessions.",
      "Combined internal data with public data sources to analyze marketing impact and better target federal employees, improving campaign results.",
      "Automated data collection from registration systems, marketing tools, and public data sources to streamline reporting processes.",
    ],
    url: "https://governmentseminars.com/",
  },
  {
    title: "Lead Merchant & Service Assistant",
    company: "Costco Wholesale",
    period: "2007-2023",
    description: [
      "Independently managed merchandising and stocking for multiple departments, ensuring product availability and visual appeal.",
      "Leveraged Costco's internal computer systems and sales records to make <b>data-driven decisions</b>, optimizing inventory and improving product placement.",
      "Utilized <b>Excel</b> and <b>Google Sheets</b> for <b>data analysis</b>, <b>reporting</b>, and <b>inventory optimization</b>.",
      "Created and maintained <b>Pivot Tables</b>, performed <b>VLOOKUP</b> operations, and automated workflows with <b>macros</b> and custom <b>formulas</b>.",
      "Performed <b>data cleaning</b> and <b>ETL</b> tasks to ensure accurate <b>KPI tracking</b> and <b>process improvement</b>.",
      "Took ownership of department performance, implementing process improvements that increased efficiency and organization.",
      "Trusted by management to work autonomously, ensuring department success with minimal oversight.",
      "Operated forklifts to transport, load, and unload merchandise safely and efficiently.",
      "Briefly held a Supervisor role, overseeing front-end operations and managing cashiers and assistants.",
    ],
  },
];

export function generateExperience() {
  const experienceTimeline = document.querySelector('.experience-timeline');

  experiences.forEach((experience, index) => {
    const descriptionItems = experience.description.map(desc => {
      const keywords = [
        'Python', 'SQL', 'Tableau', 'Power BI', 'Flask', 'Google Cloud', 
        'RAG', 'FastAPI', 'ReportLab', 'Machine Learning', 'pandas',
        'Streamlit', 'MCP', 'Dashboard', 'Data Pipeline', 'FAISS',
        'GPT-4o-mini', 'Semantic Search', 'OpenAI', 'NumPy',
        'Excel', 'Google Sheets', 'Data Analysis', 'Spreadsheet Automation',
        'VLOOKUP', 'Pivot Tables', 'Data Visualization', 'Reporting',
        'Process Improvement', 'Inventory Optimization', 'ETL', 'Data Cleaning',
        'KPI Tracking', 'Macros', 'Formulas',
        'TypeScript', 'Next.js', 'React', 'PostgreSQL', 'JWT', 'Zustand', 'Pydantic',
        'Tailwind CSS', 'VS Code', 'GitHub Copilot', 'Docker', 'GitHub Actions', 'CI/CD',
        'OpenAPI', 'Swagger', 'Uvicorn', 'JSONB', 'Postman',
        'Railway', 'Vercel', 'React 19', 'Next.js 16', 'Recharts', 'Framer Motion',
        'psycopg2', 'UUID', 'Resend', 'CSS Modules', 'Zod', 'React Hook Form',
        'Turbopack', 'Server Components', 'ASGI', 'TypeScript 5', 'Python 3.11',
        'Pydantic 2.5+', 'FastAPI 0.104+', 'PostgreSQL 14+', 'App Router'
      ];
      let highlighted = desc;
      keywords.forEach(word => {
        const regex = new RegExp(`\\b(${word})\\b`, 'g');
        highlighted = highlighted.replace(regex, `<span class="project-tag">$1</span>`);
      });
      return `<li>${highlighted}</li>`;
    }).join('');

    const experienceCard = `
      <div class="experience-card" id="card-${index}">
        <button class="experience-toggle" data-target="exp-${index}">
          <div class="experience-header">
            <div>
              <h3 class="experience-title">${experience.title}</h3>
              <h4 class="experience-company">${experience.company}</h4>
              <p class="experience-period">${experience.period}</p>
            </div>
            <div class="experience-toggle-icon"><i class="fas fa-chevron-down"></i></div>
          </div>
        </button>
        <div class="experience-details" id="exp-${index}" style="display: none;">
          <ul class="experience-description">
            ${descriptionItems}
          </ul>
        </div>
      </div>
    `;
    experienceTimeline.innerHTML += experienceCard;
  });

  document.querySelectorAll('.experience-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target);
      const card = button.closest('.experience-card');
      const isOpen = target.style.display === 'block';

      target.style.display = isOpen ? 'none' : 'block';
      button.classList.toggle('open', !isOpen);
      card.classList.toggle('open', !isOpen);
    });
  });
}
