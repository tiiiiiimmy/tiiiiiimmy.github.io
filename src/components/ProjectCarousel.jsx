import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCarousel.scss';
import buyOrByeImage from '../assets/Buy_or_Bye.png';
import farmStockAiImage from '../assets/FarmStock_AI.png';
import memoraLinkImage from '../assets/MemoraLink.png';
import speedReadImage from '../assets/Speed_Read.png';
import universalVillageEducationImage from '../assets/Universal Village Education.png';
import whyDefiImage from '../assets/Why_Defi.jpg';

const projectImages = {
  'FarmStock AI': farmStockAiImage,
  'Universal Village Education': universalVillageEducationImage,
  'Buy or Bye': buyOrByeImage,
  'Why Defi': whyDefiImage,
  'Speed Read': speedReadImage,
  MemoraLink: memoraLinkImage,
};

const projects = [
  {
    id: 0,
    number: '01',
    title: 'FarmStock AI',
    date: 'March 2026',
    description: "FarmStock AI predicts when you'll run low, alerts you on Telegram, and places orders with one tap-before you even notice a problem.",
    image: projectImages['FarmStock AI'],
    href: 'https://farmstock.timmi.online/',
    external: true,
  },
  {
    id: 1,
    number: '02',
    title: 'Universal Village Education',
    date: 'Dec 2025',
    description: 'UV exemplifies an ideal future society with innovative lifestyles that pursues harmony between humans and nature through the prudent use of technologies.',
    image: projectImages['Universal Village Education'],
    href: 'https://uveducation.org/',
    external: true,
  },
  {
    id: 2,
    number: '03',
    title: 'Buy or Bye',
    date: 'May 2025',
    description: 'An AI-driven item management assistant.',
    image: projectImages['Buy or Bye'],
    href: 'https://thua695.wixstudio.com/buyorbye',
    external: true,
  },
  {
    id: 3,
    number: '04',
    title: 'Why Defi',
    date: 'March 2025',
    description: 'Web3NZ Hackathon 2025 Runner up: Make your GST work for you using NZDD with a DeFi portfolio.',
    image: projectImages['Why Defi'],
    href: 'https://hack.web3nz.xyz/projects/why-defi',
    external: true,
  },
  {
    id: 4,
    number: '05',
    title: 'Speed Read',
    date: 'November 2024',
    description: 'An AI-assisted fast reading plugin.',
    image: projectImages['Speed Read'],
    href: '/projects/speed-read',
    external: false,
  },
  {
    id: 5,
    number: '06',
    title: 'MemoraLink',
    date: 'August 2024',
    description: 'A library of precious memories of Earth for humans escaping from it.',
    image: projectImages.MemoraLink,
    href: null,
    external: false,
  },
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('down');
  const wheelLock = useRef(false);
  const sectionRef = useRef(null);

  const goTo = useCallback(
    (idx) => {
      if (idx === current || idx < 0 || idx >= projects.length) return;
      setDirection(idx > current ? 'down' : 'up');
      setCurrent(idx);
    },
    [current]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') goTo(current + 1);
      if (e.key === 'ArrowUp') goTo(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, goTo]);

  // Scroll wheel navigation (debounced)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const rect = el.getBoundingClientRect();
      const inSection =
        e.clientY >= rect.top && e.clientY <= rect.bottom &&
        e.clientX >= rect.left && e.clientX <= rect.right;
      if (!inSection) return;
      if (wheelLock.current) return;
      wheelLock.current = true;
      setTimeout(() => { wheelLock.current = false; }, 800);
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [current, goTo]);

  const project = projects[current];
  const progress = (current / (projects.length - 1)) * 100;

  return (
    <section className="project-carousel" ref={sectionRef}>
      <h3 className="carousel-heading">My Projects</h3>

      <div className="carousel-body">
        {/* ── LEFT: Main display ── */}
        <div
          key={current}
          className={`carousel-display dir-${direction}`}
        >
          <div
            className="carousel-image"
            style={project.image ? { backgroundImage: `url(${project.image})` } : {}}
          />
          <div className="carousel-overlay" />

          <div className="carousel-content">
            <span className="project-number">{project.number}</span>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            {project.href && (
              project.external ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <span className="link-arrow">→</span>
                </a>
              ) : (
                <Link to={project.href} className="project-link">
                  View Case Study <span className="link-arrow">→</span>
                </Link>
              )
            )}
          </div>

          <div className="carousel-date">{project.date}</div>

          {/* Progress dots (mobile) */}
          <div className="mobile-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`mobile-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Navigation timeline ── */}
        <nav className="carousel-nav">
          <div className="nav-timeline">
            {/* Vertical track */}
            <div className="track-line">
              <div className="track-fill" style={{ height: `${progress}%` }} />
            </div>

            {/* Nav items */}
            <div className="nav-items">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  className={`nav-item ${i === current ? 'active' : ''} ${i < current ? 'passed' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project: ${p.title}`}
                >
                  <span className="nav-num">{p.number}</span>
                  <span className="nav-name">{p.title}</span>
                  <span className="nav-date">{p.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <div className="nav-arrows">
            <button
              className="arrow-btn"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Previous project"
            >
              ↑
            </button>
            <button
              className="arrow-btn"
              onClick={() => goTo(current + 1)}
              disabled={current === projects.length - 1}
              aria-label="Next project"
            >
              ↓
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}
