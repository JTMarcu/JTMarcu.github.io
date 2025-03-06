import { generateProjects } from './projects.js';
import { generateSkills } from './skills.js';
import { generateExperience } from './experience.js';
import { generateEducation } from './education.js';

document.addEventListener('DOMContentLoaded', () => {
  // Generate dynamic content
  generateProjects();
  generateSkills();
  generateExperience();
  generateEducation();

  // Navigation and Theme Functionality
  const initializeApp = () => {
    // DOM Elements
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item, .mobile-nav-item');

    // Theme Management
    const setTheme = (theme) => {
      body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeIcons(theme);
    };

    const updateThemeIcons = (theme) => {
      const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
      [themeToggle, themeToggleMobile].forEach(btn => {
        if (btn) btn.innerHTML = `<i class="fas ${icon}"></i>`;
      });
    };

    // Initialize theme from storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Theme Toggle Handlers
    const handleThemeToggle = () => {
      const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    };

    themeToggle?.addEventListener('click', handleThemeToggle);
    themeToggleMobile?.addEventListener('click', handleThemeToggle);

    // Mobile Menu Management
    const toggleMobileMenu = () => {
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    };

    menuToggle?.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.mobile-nav-item').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Scroll Spy Functionality
    const updateActiveNav = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', href === currentSection);
      });
    };

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('resize', updateActiveNav);
    updateActiveNav(); // Initial check
  };

  // Initialize all functionality
  initializeApp();
});