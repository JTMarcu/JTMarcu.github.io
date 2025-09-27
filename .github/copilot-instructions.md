# Portfolio Site Instructions

## 🏗️ Site Structure Overview

Your portfolio is a static website hosted on GitHub Pages with the following architecture:

```
JTMarcu.github.io/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Global styles
├── js/
│   ├── main.js           # Main JavaScript module
│   ├── projects.js       # Projects data and generation
│   ├── experience.js     # Experience/work history
│   ├── education.js      # Certifications/education
│   └── skills.js         # Skills categories
├── projects/             # Individual project pages
│   ├── [project-name].html
│   └── project_template.html
├── images/              # Images and embedded notebooks
│   ├── *.png/jpg        # Project screenshots
│   └── *.html           # Jupyter notebook exports
└── apps/                # Standalone applications
    └── prediction-web-app/

```

## 📝 Common Update Tasks

### 1. Adding a New Project

#### Step 1: Add project to the projects array
Edit [`js/projects.js`](js/projects.js) and add your project object:

```javascript
{
  title: "Your Project Name",
  description: "Brief description of what the project does and its impact.",
  image: "https://url-to-project-image.jpg", // Use Unsplash or upload to images/
  tags: ["Python", "Machine Learning", "etc"], // Technologies used
  link: "projects/your-project-name.html"
}
```

#### Step 2: Create the project page
Copy [`projects/project_template.html`](projects/project_template.html) to `projects/your-project-name.html` and update:

- Page title and meta description
- Project title and description
- Replace placeholder sections with your content
- Update image sources
- Add Jupyter notebook iframe if applicable

#### Step 3: (Optional) Add Jupyter Notebook
If including a notebook:
1. Export notebook as HTML from Jupyter
2. Place in `images/` folder
3. Embed in project page:
```html
<iframe src="../images/your-notebook.html" width="100%" height="600px" frameborder="0"></iframe>
```

### 2. Updating Experience

Edit [`js/experience.js`](js/experience.js):

```javascript
{
  title: "Job Title",
  company: "Company Name",
  period: "2024-Present",
  description: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2"
  ],
  url: "https://company-website.com" // Optional
}
```

### 3. Adding Skills

Edit [`js/skills.js`](js/skills.js) to add skills to appropriate categories:

```javascript
{ name: "New Skill", level: 4 } // level: 1-4 (Beginner to Expert)
```

### 4. Adding Certifications

Edit [`js/education.js`](js/education.js):

```javascript
{
  title: "Certification Name",
  displayImage: "https://logo-url.png",
  certificateUrl: "https://link-to-certificate.com",
  description: "What you learned and why it matters",
  url: "https://course-info-page.com"
}
```

## 🎨 Styling Guidelines

### Color Scheme
The site uses CSS variables for theming (light/dark mode):
- Primary colors defined in [`css/styles.css`](css/styles.css)
- Theme toggle handled automatically
- Maintain contrast ratios for accessibility

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<760px), Tablet, Desktop
- Test all changes on mobile viewport

## 🚀 Deployment Process

1. **Make changes locally**
   ```bash
   git clone https://github.com/JTMarcu/JTMarcu.github.io.git
   cd JTMarcu.github.io
   # Make your changes
   ```

2. **Test locally**
   - Open `index.html` in browser
   - Check all navigation links
   - Verify responsive design
   - Test theme toggle

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: [feature/project name]"
   git push origin main
   ```

4. **Verify deployment**
   - Changes typically live within 1-5 minutes
   - Visit: https://jtmarcu.github.io
   - Clear cache if changes don't appear

## 📋 Project Page Checklist

When creating a new project page, ensure you include:

- [ ] **Header Section**
  - Project title
  - Brief description
  - Link to notebook/demo (if applicable)
  
- [ ] **Overview Section**
  - Problem statement
  - Your approach/methodology
  
- [ ] **Technical Stack**
  - Languages and frameworks
  - Tools and libraries
  
- [ ] **Key Features/Findings**
  - Main accomplishments
  - Important metrics or results
  
- [ ] **Challenges & Solutions**
  - Technical hurdles overcome
  - Learning experiences
  
- [ ] **Business Impact/Outcome**
  - Value delivered
  - Improvements achieved
  
- [ ] **Visuals**
  - Screenshots or visualizations
  - Code snippets (use `<pre>` tags)

## 🔧 Maintenance Tips

### Regular Updates
- Review and update project descriptions quarterly
- Keep technologies/skills current
- Update experience section with new achievements
- Add new certifications as completed

### Performance
- Optimize images before uploading (use WebP or compressed JPG)
- Keep embedded notebooks under 10MB
- Minimize external dependencies

### SEO Best Practices
- Update meta descriptions for each page
- Use semantic HTML tags
- Include alt text for all images
- Keep URLs descriptive (kebab-case)

## 🐛 Common Issues & Solutions

### Issue: Changes not showing on GitHub Pages
**Solution:** Clear browser cache or wait 5-10 minutes for GitHub Pages to rebuild

### Issue: Project card not appearing
**Solution:** Check that project object in `js/projects.js` has all required fields

### Issue: Mobile menu not working
**Solution:** Ensure `js/main.js` is properly loaded with `type="module"`

### Issue: Theme toggle not persisting
**Solution:** Check localStorage permissions in browser

## 📚 File Templates

### Project HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Name - Jonathan Marcu</title>
  <meta name="description" content="Project description">
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<!-- Use project_template.html for full structure -->
```

### Adding Code Snippets
```html
<div class="code-block">
  <pre>
# Your code here
import pandas as pd
df = pd.read_csv('data.csv')
  </pre>
</div>
```

## 📞 Need Help?

If you encounter issues or need to make structural changes:
1. Check existing similar pages for reference
2. Test changes locally first
3. Use browser DevTools to debug JavaScript issues
4. Maintain consistent naming conventions

---
*Last updated: September 2025*