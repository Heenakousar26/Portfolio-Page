console.log("Week 2 script.js loaded successfully!");

// 1. Mobile Hamburger Menu Toggle
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Stretch Goal: Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// 2. Projects Data Array
const projects = [
  {
    title: "AI Resume Matcher",
    description:
      "An intelligent screening application that parses resumes and job descriptions to calculate ATS compatibility scores, keyword gaps, and actionable tailoring suggestions.",
    tags: ["Python", "NLP / AI", "Web App"],
    link: "https://github.com/Heenakousar26"
  },
  {
    title: "Online Booking System",
    description:
      "A full-stack reservation platform supporting real-time slot availability, conflict-free scheduling, user authentication, and automated booking status management.",
    tags: ["Java", "Spring Boot", "SQL"],
    link: "https://github.com/Heenakousar26"
  },
  {
    title: "E-Commerce Backend Engine",
    description:
      "A scalable backend service handling product catalogs, shopping cart state, order processing, and role-based access control with optimized relational queries.",
    tags: ["Java", "REST API", "PostgreSQL"],
    link: "https://github.com/Heenakousar26"
  },
  {
    title: "Interactive Flashcard App",
    description:
      "A spaced-repetition learning tool featuring custom study decks, flip animations, mastery tracking, and responsive keyboard-friendly navigation.",
    tags: ["JavaScript", "React.js", "CSS3"],
    link: "https://github.com/Heenakousar26"
  }
];

// 3. Render Projects Function
const projectsContainer = document.querySelector("#projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(category = "All") {
  projectsContainer.innerHTML = "";

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(category));

  projectsContainer.innerHTML = filteredProjects
    .map(
      (project) => `
      <article class="project-card">
        <div>
          <div class="card-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <a href="${project.link}" target="_blank" class="btn">View Source &rarr;</a>
      </article>
    `
    )
    .join("");
}

// 4. Filter Button Click Events (Stretch Goal: Active Button Highlight)
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// Initial render
renderProjects();