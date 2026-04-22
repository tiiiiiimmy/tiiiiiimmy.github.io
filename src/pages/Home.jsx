import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";

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

        {/* Introduction Section - Lower Position */}
        <section className="introduction-section">
          <div className="intro-text">
            Hi, Timmy here!
            <br />A developer 
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

        {/* My Projects Section */}
        <ProjectCarousel />

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

export default Home;
