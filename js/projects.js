export const projects = [
  {
    title: "BellaBeat Capstone Project",
    description:
      "Analyzing user data from a fitness tracker to understand activity levels, sleep patterns, and heart rate variability.",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=400&h=200",
    tags: ["Data Analysis", "Health Tech", "Python"],
    link: "projects/bellabeat.html"
  },
  {
    title: "Shinkansen Bullet Train Passenger Satisfaction Prediction",
    description:
      "Predicting passenger satisfaction based on various parameters. Achieved a 94.35% accuracy rating on the test data.",
    image: "https://img.freepik.com/premium-photo/shinkansen-bullet-train-japan_729113-4820.jpg",
    tags: ["Python", "Machine Learning", "Classification"],
    link: "projects/shinkansen.html"
  },
  {
    title: "Amazon Product Recommendation System",
    description:
      "Recommending the best Amazon products using rank-based, similarity-based, and matrix factorization methods.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Recommendation Systems", "Data Analysis"],
    link: "projects/amazon.html"
  },
  {
    title: "Predicting Potential Customers",
    description:
      "Identifying leads likely to convert to paid customers using decision trees, random forests, and hyperparameter tuning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Machine Learning", "Random Forest"],
    link: "projects/customers.html"
  },
  {
    title: "FoodHub Order Analysis",
    description:
      "Analyzing data to understand the demand of different restaurants and enhance business and customer experience.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=200",
    tags: ["Data Analysis", "Python", "Visualization"],
    link: "projects/foodhub.html"
  },
  
  {
    title: "Common Core Math Worksheet Generator",
    description:
      "Flask app generating K-5 math worksheets (Python, pandas, ReportLab). Dynamically creates PDFs aligned with Common Core standards using automation.",
    image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&w=400&h=200",
    tags: ["Flask", "Python", "PDF Generation", "Education"],
    link: "projects/math-worksheet.html"
  },
  {
    title: "ATS Resume Generator",
    description:
      "Developed a Python-based tool that converts structured CSV data into a formatted ATS-friendly PDF resume. Uses pandas for data parsing and ReportLab for PDF generation.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "pandas", "ReportLab", "PDF Generation"],
    link: "projects/ats-resume.html"
  },
  {
    title: "RAG AI Agent",
    description:
      "Developing an AI-driven tool that uses retrieval-augmented generation to draft personalized emails for small businesses.",
    image: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "NLP", "Flask", "AI"],
    link: "projects/rag-ai.html"
  },
  {
    title: "NCAA March Madness Prediction Model",
    description: "Building a predictive model for the NCAA March Madness tournament using machine learning techniques.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Machine Learning", "Sports Analytics"],
    link: "projects/march-madness.html"
  },
  // ... other projects ...
];

export function generateProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    const projectCard = `
      <div class="project-card">
        <a href="${project.link}">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </a>
      </div>
    `;
    projectsGrid.innerHTML += projectCard;
  });
}