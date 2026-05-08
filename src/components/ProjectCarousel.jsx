import React from 'react';
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
    description:
      "FarmStock AI predicts when you'll run low, alerts you on Telegram, and places orders with one tap-before you even notice a problem.",
    image: projectImages['FarmStock AI'],
    href: 'https://farmstock.timmi.online/',
    external: true,
  },
  {
    id: 1,
    number: '02',
    title: 'Universal Village Education',
    date: 'Dec 2025',
    description:
      'UV exemplifies an ideal future society with innovative lifestyles that pursues harmony between humans and nature through the prudent use of technologies.',
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
    description:
      'Web3NZ Hackathon 2025 Runner up: Make your GST work for you using NZDD with a DeFi portfolio.',
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
    description:
      'A library of precious memories of Earth for humans escaping from it.',
    image: projectImages.MemoraLink,
    href: null,
    external: false,
  },
];

function ProjectCard({ project }) {
  const card = (
    <article className="project-card">
      <div className="project-card-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="project-card-image"
        />
      </div>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.number}</span>
    
        </div>
        <span>{project.date}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        {project.href && (
          <span className="project-card-link">
            {project.external ? 'View Project' : 'View Case Study'}
            <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </article>
  );

  if (!project.href) return card;

  return project.external ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-anchor"
    >
      {card}
    </a>
  ) : (
    <Link to={project.href} className="project-card-anchor">
      {card}
    </Link>
  );
}

export default function ProjectCarousel() {
  return (
    <section className="project-carousel">
      <h3 className="carousel-heading">My Projects</h3>

      <div className="project-card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
