export const experiences = [
  {
  title: "Co-Founder & Chief Technology Officer",
  company: "Stealth Startup (Enterprise SaaS)",
    period: "2024-Present",
    description: [
  "Built an enterprise SaaS platform from the ground up: modern web app (100+ components), reliable API (20+ endpoints), and a well-structured PostgreSQL database.",
      "Created an assessment engine that supports multiple roles and ~150 questions with strong accuracy and clear scoring.",
      "Added secure sign-in, admin analytics, and simple public endpoints to connect the website and the backend.",
      "Improved delivery speed by focusing on clean, reusable components and a consistent design system.",
      "Documented the system with clear API references, data diagrams, and setup guides to make future changes easier.",
      "Current status: testing with a goal to launch a pilot in the next month."
    ],
    url: "#"
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
        'Streamlit', 'MCP', 'Dashboard', 'Data Pipeline',
        'Excel', 'Google Sheets', 'Data Analysis', 'Spreadsheet Automation',
        'VLOOKUP', 'Pivot Tables', 'Data Visualization', 'Reporting',
        'Process Improvement', 'Inventory Optimization', 'ETL', 'Data Cleaning',
        'KPI Tracking', 'Macros', 'Formulas',
        'TypeScript', 'Next.js', 'React', 'PostgreSQL', 'JWT', 'Zustand', 'Pydantic'
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
