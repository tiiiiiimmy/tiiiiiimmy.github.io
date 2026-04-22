import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";

const techStacks = [
  {
    label: "Languages",
    content: "Java, JavaScript, TypeScript, Python, C#, SQL, Bash",
  },
  {
    label: "Backend & APIs",
    content:
      "RESTful APIs, Node.js, Express, FastAPI, .NET Core, Entity Framework",
  },
  {
    label: "Databases",
    content:
      "PostgreSQL, MySQL, SQLite, SQL schema design, data migration, AWS RDS",
  },
  {
    label: "Testing & QA",
    content:
      "Playwright, Vitest, Jest, Postman, Cucumber, Unit / Integration / E2E, Bug triage (Jira)",
  },
  {
    label: "DevOps & CI/CD",
    content:
      "GitHub Actions, Jenkins, Azure DevOps, Docker, Kubernetes, AWS (EC2, ECS, RDS, S3)",
  },
  {
    label: "Frontend",
    content:
      "React, TypeScript, Next.js, Tailwind CSS, HTML/CSS, Ant Design",
  },
  {
    label: "Tooling & Agile",
    content: "Git, Jira, Figma, Agile / Scrum, Linux/Unix",
  },
];

function Home() {
  return (
    <div className="app">
      {/* Background SVG Element */}
      <div className="background-svg">
        <svg
          width="3700"
          height="2681"
          viewBox="0 0 3700 2681"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2169.32 127L901.706 930.177L2169.32 473.023L953.146 1243.37L2959.29 412.406L75 2056.65L3628 541.217L901.706 2011.18L2959.29 1303.98L1287.5 2286.49L2838.04 1677.79L2029 2580"
            stroke="#C8FF32"
            strokeWidth="300"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Section with Large Titles */}
        <section className="hero-section">
          <div className="hero-wrapper">
            {/* Main Titles */}
            <div className="main-title">dev & design</div>

            <div className="portfolio-title">portfolio</div>

            {/* Subtitle */}
            <div className="subtitle">
              Efficient work enables your needs to be implemented from design to
              development
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="vertical-line" />
          <div className="horizontal-line" />
        </div>

        <section className="profile-section">
          <div className="profile-intro">
            <div className="intro-text">
              Hi, Timmy here!
              <br />A developer
            </div>

            <div className="social-section">
              <a
                href="https://github.com/tiiiiiimmy"
                target="https://github.com/tiiiiiimmy"
                rel="noopener noreferrer"
                className="social-link github"
              >
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/timmy-huang-b4877728a/"
                target="https://www.linkedin.com/in/timmy-huang-b4877728a/"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                Linkedin
              </a>

              <a className="social-link mail">thua695@aucklanduni.ac.nz</a>
            </div>
          </div>

          <div className="profile-skills">
            <h2 className="profile-skills-title">Tech Stack</h2>
            <div className="profile-skills-list">
              {techStacks.map((item) => (
                <p className="profile-skill-item" key={item.label}>
                  <span className="profile-skill-label">{item.label}:</span>{" "}
                  <span className="profile-skill-content">{item.content}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* My Projects Section */}
        <ProjectCarousel />

        {/* Main Slogan at Bottom */}
        <section className="bottom-slogan-section">
          <h1 className="bottom-slogan">
            Always try, always learn, and strive for excellence
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
