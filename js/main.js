import { generateProjects } from './projects.js';
import { generateSkills } from './skills.js';
import { generateExperience } from './experience.js';
import { generateEducation } from './education.js';

// Call the functions to generate the content
document.addEventListener('DOMContentLoaded', () => {
  generateProjects();
  generateSkills();
  generateExperience();
  generateEducation();
});