export const experiences = [
  {
    title: "Data & Full-Stack Developer",
    company: "Freelance",
    period: "2023-Present",
    description: [
      "Designed and implemented data pipelines using Google Cloud to automate data collection and processing for a medical staffing company.",
      "Built interactive dashboards to visualize key metrics, enabling data-driven prioritization of job targeting and workflow optimization.",
      "Developed a Retrieval-Augmented Generation (RAG) AI Agent for small businesses to draft personalized email responses.",
      "Building a predictive model for the upcoming NCAA March Madness tournament using machine learning techniques.",
      "Built an ATS-friendly Resume Generator using Python (pandas, ReportLab) to format and structure resumes based on CSV data.",
      "Developed Common Core Math Worksheet Generator (Flask/pandas/ReportLab) for K-5 educational resources.",
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
    title: "Service Assistant & Merchant",
    company: "Costco Wholesale",
    period: "2007-2023",
    description: [
      "Independently managed merchandising and stocking for multiple departments, ensuring product availability and visual appeal.",
      "Leveraged Costco's internal computer systems and sales records to make data-driven decisions, optimizing inventory and improving product placement.",
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
        'RAG', 'FastAPI', 'ReportLab', 'Machine Learning', 'pandas'
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
