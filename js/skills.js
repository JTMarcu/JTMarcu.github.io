export const skillCategories = [
  {
    title: "Programming & Data",
    description: "Core programming and data manipulation skills",
    skills: [
      { name: "Python", level: 4 },
      { name: "JavaScript", level: 3 },     
      { name: "SQL", level: 4 },
      { name: "R Programming", level: 3 },
      { name: "Dax/M", level: 4 },
      { name: "Scikit-learn", level: 4 },
      { name: "Pandas", level: 4 },
      { name: "NumPy", level: 4 },
      { name: "Data Modeling", level: 4 },
    ],
  },
  {
    title: "Visualization & Reporting",
    description: "Data visualization and reporting tools",
    skills: [
      { name: "Power BI", level: 4 },
      { name: "Tableau", level: 4 },
      { name: "Recharts", level: 3 },
      { name: "Apache Superset", level: 3 },
      { name: "ReportLab", level: 4 },
      { name: "Streamlit", level: 4 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud platforms and infrastructure tools",
    skills: [
      { name: "Google Cloud", level: 3 },
      { name: "BigQuery", level: 4 },
      { name: "AWS", level: 3 },
      { name: "PostgreSQL", level: 4 },
      { name: "psycopg2", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Railway", level: 4 },
      { name: "Vercel", level: 3 },
      { name: "dbt", level: 3 },
      { name: "Data Pipelines", level: 3 },
      { name: "Git", level: 4 },
    ],
  },
  {
    title: "Web Development",
    description: "Web development technologies",
    skills: [
      { name: "HTML/CSS", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "React", level: 4 },
      { name: "React 19", level: 4 },
      { name: "REST APIs", level: 3 },
      { name: "Flask", level: 4 },
      { name: "FastAPI", level: 4 },
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Framer Motion", level: 3 },
      { name: "Gradio", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Zod", level: 3 },
      { name: "React Hook Form", level: 3 },
    ],
  },
  {
    title: "Machine Learning & AI",
    description: "Machine learning frameworks and AI tools",
    skills: [
      { name: "OpenAI Whisper", level: 3 },
      { name: "spaCy", level: 4 },
      { name: "Transformers", level: 3 },
      { name: "NLP", level: 4 },
      { name: "Entity Extraction", level: 4 },
      { name: "TensorFlow", level: 3 },
      { name: "Keras", level: 3 },
      { name: "LangChain", level: 3 },
      { name: "FAISS", level: 4 },
      { name: "OpenAI API", level: 4 },
      { name: "Hugging Face", level: 3 },
      { name: "Semantic Search", level: 4 },
    ],
  },
  {
    title: "Other Tools & Technologies",
    description: "Additional tools and technologies",
    skills: [
      { name: "CSV/JSON", level: 5 },
      { name: "PDF Generation", level: 4 },
      { name: "Data Cleaning", level: 4 },
      { name: "Automation", level: 4 },
      { name: "GitHub Actions", level: 3 },
      { name: "VS Code", level: 4 },
      { name: "GitHub Copilot", level: 3 },
    ],
  },
];

export function generateSkills() {
  const skillsGrid = document.querySelector('.skills-grid');
  skillCategories.forEach(category => {
    const skillCard = `
      <div class="skill-card">
        <h3 class="skill-title">${category.title}</h3>
        <p class="skill-description">${category.description}</p>
        <ul class="skill-list">
          ${category.skills.map(skill => `
            <li>
              <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
              </div>
              <div class="skill-bubbles">
                ${Array(5).fill().map((_, index) => `
                  <span class="bubble ${index < skill.level ? 'filled' : ''}"></span>
                `).join('')}
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    skillsGrid.innerHTML += skillCard;
  });
}