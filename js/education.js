export const certifications = [
  {
    title: "MIT - Data Science and Machine Learning: Making Data-Driven Decisions",
    displayImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
    certificateUrl:
      "https://d9jmtjs5r4cgq.cloudfront.net/CertificateAndTranscript/102980/original/JONATHAN_MARCU_certificate20240123-949-1cbxd4k.jpg",
    description:
      "This course covers the foundations of data science and machine learning, such as data analysis, visualization, statistics, hypothesis testing, regression, clustering, classification, ensemble learning, recommendation systems, natural language processing, computer vision, and deep learning.",
    url: "https://idss.mit.edu/academics/idssx/data-science-machine-learning-making-data-driven-decisions/",
  },
  {
    title: "Google Data Analytics Professional Certification",
    displayImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    certificateUrl:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~AVX3KB86MEMC/CERTIFICATE_LANDING_PAGE~AVX3KB86MEMC.jpeg",
    description:
      "This certification covers data analysis, visualization, statistics, regression, clustering, and classification using tools like Python, NumPy, Pandas, Scikit-learn, and more.",
    url: "https://www.coursera.org/professional-certificates/google-data-analytics",
  },
  {
    title: "Google Business Intelligence Professional Certification",
    displayImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    certificateUrl:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JDSNH3BU75GQ/CERTIFICATE_LANDING_PAGE~JDSNH3BU75GQ.jpeg",
    description:
      "This certification covers data modeling, ETL processes, data visualization, and dashboard creation using tools like Google Cloud Services, Dataflow, Excel sheets, SQL, PowerPoint, Google Cloud Platform, Data Studio, BigQuery, Python, and R.",
    url: "https://www.coursera.org/professional-certificates/google-business-intelligence",
  },
  // ... other certifications ...
];

export function generateEducation() {
  const educationList = document.querySelector('.education-list');
  certifications.forEach(certification => {
    const educationCard = `
      <div class="education-card">
        <img src="${certification.displayImage}" alt="${certification.title}" class="education-image">
        <div class="education-content">
          <h3 class="education-title">${certification.title}</h3>
          <p class="education-description">${certification.description}</p>
          <a href="${certification.certificateUrl}" target="_blank" class="education-link">View Certificate</a>
        </div>
      </div>
    `;
    educationList.innerHTML += educationCard;
  });
}