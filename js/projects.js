export const projects = [
  {
  title: "HiveWell™ Culture Assessment Platform",
  description: "Production SaaS platform launched November 23, 2025 at joinhivewell.com. Built solo in 10 months (Feb-Nov 2025): 100+ React components, 42-table PostgreSQL database (3,093+ records), 20+ API endpoints, real-time analytics (9 tabs, 8 chart types), automated PDF reporting (100% success rate). Railway backend + Vercel frontend deployment.",
  image: "images/hivewell.png",
  tags: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS", "Zustand", "Recharts", "FastAPI", "Python", "Pydantic", "PostgreSQL", "Railway", "Docker", "Vercel", "SaaS"],
  link: "projects/hivewell.html"
  },
  {
  title: "Live Data Visualizer",
  description: "A local Streamlit dashboard that streams live stock prices, financial news, and weather data using MCP and FastAPI tools.",
  image: "https://th.bing.com/th/id/OIP.SN1qtTiB8wnOjKksOW7WHQHaEK?w=288&h=180&c=7&r=0&o=7&cb=iwp1&pid=1.7&rm=3",
  tags: ["Python", "Streamlit", "FastAPI", "Altair", "Live Data", "MCP"],
  link: "projects/live-data-visualizer.html"
  },
  {
    title: "NCAA March Madness Prediction Model",
    description: "Building a predictive model for the NCAA March Madness tournament using machine learning techniques.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&h=200",
    tags: ["Python", "Machine Learning", "Sports Analytics", "Scikit-learn", "Data Visualization"],
    link: "projects/march-madness.html"
  },
  {
  title: "Rental Price Optimization Tool",
  description: "A full-stack data pipeline for scraping, storing, and analyzing 13,000+ San Diego rentals. Scrapes Apartments.com listings, loads monthly data into PostgreSQL, analyzes trends with SQL in Jupyter, and powers automated dashboards in Power BI and Tableau. Includes machine learning rent prediction.",
  image: "https://timesofsandiego.com/wp-content/uploads/2023/12/Brynn-Civita.jpg",
  tags: ["Python", "Selenium", "BeautifulSoup", "Pandas", "PostgreSQL", "SQLAlchemy", "psycopg2", "Jupyter", "Data Science", "Data Visualization", "Power BI", "Tableau", "Machine Learning"],
  link: "projects/rental_price.html"
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
  title: "Voicemail & Call Categorizer",
  description: "AI-powered Streamlit app for instant voicemail/call transcription and automated task routing. Extracts caller details, organizes requests, and streamlines client follow-up for businesses.",
  image: "images/VM.png",
  tags: ["Python", "Streamlit", "OpenAI Whisper", "NLP", "PyTorch", "spaCy", "Entity Extraction", "Automation"],
  link: "projects/voicemail-transcriber.html"
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
  title: "Job Dashboard + Resume Builder",
  description: "Local-first platform to search jobs, tailor resumes using AI, and manage applications with MCP-powered tools.",
  image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&h=200",
  tags: ["Python", "Streamlit", "FastAPI", "OpenAI", "Ollama", "PDF", "Automation", "Resume"],
  link: "projects/job-dashboard.html"
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