export const skillCategories = [
  {
    title: "Programming & Data",
    description: "Core programming and data manipulation skills",
    skills: [
      { name: "Python", level: 5 },
      { name: "Pandas", level: 5 },
      { name: "NumPy", level: 4 },
      { name: "Scikit-learn", level: 4 },
      { name: "SQL", level: 4 },
      { name: "R Programming", level: 3 },
    ],
  },
  {
    title: "Visualization & Reporting",
    description: "Data visualization and reporting tools",
    skills: [
      { name: "Tableau", level: 4 },
      { name: "ReportLab", level: 4 },
      { name: "Seaborn", level: 4 },
      { name: "Matplotlib", level: 4 },
      { name: "Data Visualization", level: 5 },
      { name: "Dashboard Design", level: 4 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud platforms and infrastructure tools",
    skills: [
      { name: "Google Cloud", level: 3 },
      { name: "BigQuery", level: 4 },
      { name: "AWS", level: 3 },
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
      { name: "REST APIs", level: 3 },
      { name: "Flask", level: 4 },
      { name: "Gradio", level: 3 },
    ],
  },
  {
    title: "Machine Learning & AI",
    description: "Machine learning frameworks and AI tools",
    skills: [
      { name: "TensorFlow", level: 3 },
      { name: "Keras", level: 3 },
      { name: "LangChain", level: 3 },
      { name: "FAISS", level: 3 },
      { name: "Hugging Face", level: 3 },
    ],
  },
  {
    title: "Other Tools & Technologies",
    description: "Additional tools and technologies",
    skills: [
      { name: "ReportLab", level: 4 },
      { name: "CSV", level: 5 },
      { name: "PDF Generation", level: 4 },
      { name: "Data Cleaning", level: 4 },
      { name: "Automation", level: 4 },
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