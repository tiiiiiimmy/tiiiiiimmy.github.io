import React from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import ProjectCarousel from "../components/ProjectCarousel";

const techStacks = [
  {
    icon: "code",
    label: "Languages",
    content: "Java, JavaScript, TypeScript, Python, C#, SQL, Bash",
  },
  {
    icon: "server",
    label: "Backend & DB",
    content:
      "RESTful APIs, Node.js, Express, FastAPI, .NET Core, PostgreSQL, MySQL, SQLite",
  },

  {
    icon: "shield",
    label: "Testing & QA",
    content:
      "Playwright, Jest, Postman, Cucumber, Unit / Integration / E2E, Bug triage (Jira)",
  },
  {
    icon: "screen",
    label: "Frontend",
    content:
      "React, TypeScript, Next.js, Tailwind CSS, HTML/CSS, Ant Design",
  },
  {
    icon: "infinity",
    label: "DevOps & CI/CD",
    content:
      "GitHub Actions, Jenkins, Azure DevOps, Docker, Kubernetes, AWS",
  },
 
  {
    icon: "toolbox",
    label: "Tooling & AI",
    content: "Claude Code, Cursor, n8n, MCP, Skill, Git, Jira, Figma, Agile / Scrum, Linux/Unix",
  },
];

function SkillIcon({ type }) {
  const iconProps = {
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    case "server":
      return (
        <svg {...iconProps}>
          <rect x="6" y="7" width="22" height="6" rx="1.5" />
          <rect x="6" y="14" width="22" height="6" rx="1.5" />
          <rect x="6" y="21" width="22" height="6" rx="1.5" />
          <path d="M10 10h.01M10 17h.01M10 24h.01" />
        </svg>
      );
    case "database":
      return (
        <svg {...iconProps}>
          <ellipse cx="17" cy="9" rx="10" ry="4" />
          <path d="M7 9v16c0 2.2 4.5 4 10 4s10-1.8 10-4V9" />
          <path d="M7 17c0 2.2 4.5 4 10 4s10-1.8 10-4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...iconProps}>
          <path d="M17 5 7 9v7c0 6.4 4.2 10.8 10 13 5.8-2.2 10-6.6 10-13V9L17 5Z" />
          <path d="m12.5 17 3 3 6-7" />
        </svg>
      );
    case "infinity":
      return (
        <svg {...iconProps}>
          <path d="M8 20c-3 0-5-2.1-5-5s2-5 5-5c4 0 6 10 10 10 3 0 5-2.1 5-5s-2-5-5-5c-4 0-6 10-10 10Z" />
        </svg>
      );
    case "screen":
      return (
        <svg {...iconProps}>
          <rect x="5" y="8" width="24" height="18" rx="2" />
          <path d="m13 18 3-3M16 21l5-6" />
        </svg>
      );
    case "toolbox":
      return (
        <svg {...iconProps}>
          <rect x="5" y="12" width="24" height="16" rx="2" />
          <path d="M13 12V8h8v4M5 18h24M17 17v3" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="m12 10-6 7 6 7M22 10l6 7-6 7M19 7l-4 20" />
        </svg>
      );
  }
}

function Home() {
  return (
    <div className="app">
      <div className="shader-background" aria-hidden="true">
        <ShaderGradientCanvas>
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={3.6}
            cPolarAngle={90}
            cameraZoom={1}
            color1="#ff5005"
            color2="#dbba95"
            color3="#b792e1"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="plane"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Section with Large Titles */}
        <section className="hero-section">
          <div className="hero-wrapper">
            {/* Main Titles */}
            <div className="main-title">Timmy's</div>
            <div className="main-title">dev & design</div>

            <div className="portfolio-title">portfolio</div>

            {/* Subtitle */}
            <div className="subtitle">
              I turn ideas into reliable, user-friendly digital products — from design to development.
            </div>

            <div className="hero-social-section">
              <a
                href="https://github.com/tiiiiiimmy"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/timmy-huang-b4877728a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                Linkedin
              </a>

              <a
                href="mailto:thua695@aucklanduni.ac.nz"
                className="hero-social-link"
              >
                thua695@aucklanduni.ac.nz
              </a>
            </div>
          </div>
        </section>

        <section className="tech-stack-section" aria-labelledby="tech-stack-title">
          <div className="tech-stack-header">
            <h2 id="tech-stack-title">Tech Stack</h2>
            <p>Collaborative, proactive, and eager to learn.</p>
          </div>

          <div className="tech-stack-grid">
            {techStacks.map((item) => (
              <article className="tech-stack-card" key={item.label}>
                <div className="tech-stack-icon">
                  <SkillIcon type={item.icon} />
                </div>
                <div className="tech-stack-copy">
                  <div className="tech-stack-label-row">
                    <h3>{item.label}</h3>
                    <span />
                  </div>
                  <p>{item.content}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="tech-stack-footer-line" aria-hidden="true" />
        </section>

        {/* My Projects Section */}
        <ProjectCarousel />

        {/* Main Slogan at Bottom */}
        <section className="bottom-slogan-section">
          <h1 className="bottom-slogan">
            <span className="slogan-line">Keep learning,</span>
            <br />
            <span className="slogan-line">keep building,</span>
            <br />
            <span className="slogan-line slogan-line--nowrap">
              and deliver with care.
            </span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
