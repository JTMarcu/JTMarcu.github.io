export const projects = [
  {
    title: "NCAA March Madness Prediction Model",
    description: "Building a predictive model for the NCAA March Madness tournament using machine learning techniques.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Machine Learning", "Sports Analytics", "Scikit-learn", "Data Visualization"],
    link: "projects/march-madness.html"
  },
  {
    title: "FoodHub Order Analysis",
    description: "Analyzing data to understand the demand of different restaurants and enhance business and customer experience.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Pandas", "Seaborn", "Data Analysis", "Visualization"],
    link: "projects/foodhub.html"
  },
  {
    title: "BellaBeat Capstone Project",
    description: "Analyzing user data from a fitness tracker to understand activity levels, sleep patterns, and heart rate variability.",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=400&h=200",
    tags: ["R Programming", "Tidyverse", "Data Cleaning", "Visualization"],
    link: "projects/bellabeat.html"
  },
  {
    title: "Brain Tumor Detection",
    description: "Using machine learning to detect brain tumors from MRI scans.",
    image: "https://th.bing.com/th/id/OIP.fxmPWbURYvhYPuqPKFMRegHaDt?w=326&h=174&c=7&r=0&o=5&pid=1.7",
    tags: ["Python", "TensorFlow", "Deep Learning", "Medical Imaging", "Data Science"],
    link: "projects/brain-tumor.html"
  },
  {
    title: "Skin Cancer Detection",
    description: "Using machine learning to detect melonoma from images of skin.",
    image: "https://www.vuassistance.com/wp-content/uploads/2021/10/IMG-20211008-WA0009-800x500.jpg",
    tags: ["Python", "PyTorch", "Deep Learning", "Medical Imaging", "Data Science"],
    link: "projects/dermatology.html"
  },
  {
    title: "Rental Price Optimization Tool",
    description: "A tool that uses scraped data from apartments.com to analyze rental prices in the San Diego area, helping property managers optimize their pricing strategies.",
    image: "https://timesofsandiego.com/wp-content/uploads/2023/12/Brynn-Civita.jpg",
    tags: ["Python", "Selenium", "BeautifulSoup", "Data Cleaning", "Power BI", "Tableau"],
    link: "projects/rental_price.html"
  }, 
  {
    title: "ATS Resume Generator",
    description: "Developed a Python-based tool that converts structured CSV data into a formatted ATS-friendly PDF resume.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "pandas", "ReportLab", "PDF Generation", "Automation"],
    link: "projects/ats-resume.html"
  },
  {
    title: "AWS Flashcards",
    description: "Flashcards app to help study for AWS exams. Built with Flask and Python, it provides an interactive way to learn AWS concepts.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Flask", "AWS", "Education", "Interactive UI"],
    link: "projects/flashcards.html"
  },
  {
    title: "RAG Gandalf Chatbot",
    description: "A 'Lord of the Rings' expert chatbot built using Retrieval-Augmented Generation (RAG) techniques, LangChain, and Hugging Face.",
    image: "https://i.pinimg.com/474x/d0/a4/66/d0a4666833bad03c01a24b52c02a2aca--gandalf-the-hobbit.jpg",
    tags: ["Python", "LangChain", "FAISS", "Hugging Face", "Gradio", "AI"],
    link: "projects/gandalf-bot.html"
  },
  {
    title: "Shinkansen Bullet Train Passenger Satisfaction Prediction",
    description: "Predicting passenger satisfaction based on various parameters. Achieved a 94.35% accuracy rating on the test data.",
    image: "https://img.freepik.com/premium-photo/shinkansen-bullet-train-japan_729113-4820.jpg",
    tags: ["Python", "Machine Learning", "Classification", "Data Analysis"],
    link: "projects/shinkansen.html"
  },
  {
    title: "Amazon Product Recommendation System",
    description: "Recommending the best Amazon products using rank-based, similarity-based, and matrix factorization methods.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Recommendation Systems", "Data Analysis", "Matrix Factorization"],
    link: "projects/amazon.html"
  },
  {
    title: "Predicting Potential Customers",
    description: "Identifying leads likely to convert to paid customers using decision trees, random forests, and hyperparameter tuning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Machine Learning", "Random Forest", "Customer Analytics"],
    link: "projects/customers.html"
  },
  {
    title: "Common Core Math Worksheet Generator",
    description: "Flask app generating K-5 math worksheets (Python, pandas, ReportLab). Dynamically creates PDFs aligned with Common Core standards.",
    image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&w=400&h=200",
    tags: ["Flask", "Python", "PDF Generation", "Education", "Automation"],
    link: "projects/math-worksheet.html"
  }

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