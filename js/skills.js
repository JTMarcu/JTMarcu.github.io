export const skillCategories = [
  {
    title: "Programming & Data",
    description: "Core programming and data manipulation skills",
    skills: [
      { name: "Python", level: 5 },
      { name: "Pandas", level: 4 },
      { name: "NumPy", level: 4 },
      { name: "Scikit-learn", level: 3 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    title: "Visualization & Reporting",
    description: "Data visualization and reporting tools",
    skills: [
      { name: "Tableau", level: 4 },
      { name: "ReportLab", level: 4 },
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
    ],
  },
  // ... other skill categories ...
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
                  <span class="bubble ${index < skill.level? 'filled' : ''}"></span>
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