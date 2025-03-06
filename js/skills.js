export const skillCategories = [
  {
    title: "Programming & Data",
    description: "Core programming and data manipulation skills",
    skills: [
      { name: "Python", level: 90 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "Scikit-learn", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Visualization & Reporting",
    description: "Data visualization and reporting tools",
    skills: [
      { name: "Tableau", level: 80 },
      { name: "ReportLab", level: 75 },
      { name: "Data Visualization", level: 85 },
      { name: "Dashboard Design", level: 80 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud platforms and infrastructure tools",
    skills: [
      { name: "Google Cloud", level: 70 },
      { name: "BigQuery", level: 75 },
      { name: "Data Pipelines", level: 65 },
      { name: "Git", level: 70 },
    ],
  },
  {
    title: "Web Development",
    description: "Web development technologies",
    skills: [
      { name: "HTML/CSS", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "REST APIs", level: 70 },
      { name: "Flask", level: 75 },
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
                <span class="skill-level">${skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%;"></div>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    skillsGrid.innerHTML += skillCard;
  });
}