import React from "react";
import "./App.scss";

function App() {
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
            stroke-width="300"
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

        {/* Introduction Section - Lower Position */}
        <section className="introduction-section">
          <div className="intro-text">
            Hi, Timmy here!
            <br />A full stack developer & Product Designer
          </div>
        </section>

        {/* Social Links */}
        <section className="social-section">
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
        </section>

        {/* Skills and Education Combined Section */}
        <section className="skills-education-section">
          {/* Skills Container */}
          <div className="skills-container">
            {/* Dev Skills */}
            <div className="skill-category">
              <div className="skill-title">Dev</div>
              <div className="skill-list">
                Java, C#, JS
                <br />
                HTML, CSS
                <br />
                <br />
                React, Svelte
                <br />
                Node.JS, ASP.NET
                <br />
                SQLite, MongoDB
                <br />
                <br />
                AWS, Azure cloud
                <br />
                Agile (Sprint, Scrum)
              </div>
            </div>

            {/* Design Skills */}
            <div className="skill-category">
              <div className="skill-title">Design</div>
              <div className="skill-list">
                UXI Design
                <br />
                Graphic Design
                <br />
                <br />
                Figma
                <br />
                Wix
                <br />
                Adobe suite
              </div>
            </div>
          </div>

          {/* Education Container */}
          <div className="education-container">
            <h2 className="education-title">Education</h2>
            <div className="education-list">
              <div className="education-item master">
                <h3 className="degree-title">
                  Master of Information Technology
                </h3>
                <p className="university-name">University of Auckland</p>
              </div>
              <div className="education-item bachelor">
                <h3 className="degree-title">Bachelor of Industrial Design</h3>
                <p className="university-name">
                  University of Science and Technology Beijing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Projects Section */}
        <section className="projects-section">
          <h2 className="projects-title">My Projects</h2>

          {/* Project Grid */}
          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <a 
                href="https://thua695.wixstudio.com/buyorbye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <div className="project-image project-1" />
              </a>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Buy or Bye</h3>
                  <span className="project-date">May 2025</span>
                </div>
                <p className="project-description">
                An AI-driven item management assistant.
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <a 
                href="https://hack.web3nz.xyz/about-3-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <div className="project-image project-2" />
              </a>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Why Defi</h3>
                  <span className="project-date">March 2025</span>
                </div>
                <p className="project-description">
                Web3NZ Hackathon 2025 Runner up prize: Make your GST work for you by using NZDD with a DeFi portfolio until is time to send it to IRD.
                </p>
              </div>
            </div>

           
           
          </div>
        </section>

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

export default App;
