import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import speedReadMockup from "../assets/Speed_Read.png";
import avatarDavid from "../assets/SpeedRead/avatar1.png";
import avatarNora from "../assets/SpeedRead/avatar2.png";
import avatarDewey from "../assets/SpeedRead/avatar3.png";
import competitiveReading from "../assets/SpeedRead/competitive1.png";
import competitiveDiscussion from "../assets/SpeedRead/competitive2.png";
import competitiveNews from "../assets/SpeedRead/competitive3.png";
import competitiveSummary from "../assets/SpeedRead/competitive4.png";
import designStyleImage from "../assets/SpeedRead/designstyle.png";
import smartNoteImage from "../assets/SpeedRead/smartnote.png";
import "./SpeedRead.scss";

const interviewCards = [
  {
    name: "David Ren",
    role: "Embedded development engineer, heavy user of technology forums",
    avatar: avatarDavid,
    quote: (
      <>
        When reading technology articles, I often only want to{" "}
        <strong>discuss and share one or two key knowledge points</strong>, but
        the software I currently use can only{" "}
        <strong>comment on the entire article</strong>. I often have to quote
        when commenting, or copy the sentences to other platforms for
        discussion.
      </>
    ),
  },
  {
    name: "Nora",
    role: "Test engineer, web3 technology enthusiast",
    avatar: avatarNora,
    quote: (
      <>
        When my friends and I start researching and discussing new technologies,
        we often <strong>build a notion together</strong> to update and maintain
        data from different sources. At the same time, the underlined comments
        in the notion also allow us to{" "}
        <strong>focus on the specific content for discussion</strong>. For some
        overly long articles, I prefer to let{" "}
        <strong>AI help me sort out the content first</strong>.
      </>
    ),
  },
  {
    name: "Dewey",
    role: "Master of Artificial Intelligence, read a lot of literature every day",
    avatar: avatarDewey,
    quote: (
      <>
        When I read literature every day, I often encounter many{" "}
        <strong>unfamiliar concepts</strong>, which need to be searched and
        annotated, and <strong>organized together with the corresponding content</strong>.
        At the same time, I hope that relevant recommendations can be{" "}
        <strong>more intelligent</strong>, so that I can better explore articles
        in related fields.
      </>
    ),
  },
];

const insights = [
  {
    title: "Sentence-level sharing and discussion",
    detail: "Discuss exact ideas without copying paragraphs elsewhere.",
  },
  {
    title: "Collaborative knowledge building",
    detail: "Collect sources, notes, and comments with other readers.",
  },
  {
    title: "AI summaries that keep context visible",
    detail: "Understand long articles faster while staying inside the text.",
  },
  {
    title: "Concept explanations close to the source text",
    detail: "Clarify unfamiliar ideas without breaking reading flow.",
  },
  {
    title: "Lightweight ways to revisit active comments",
    detail: "Return to meaningful discussions and marked sentences quickly.",
  },
];

const painPoints = [
  {
    title: "Limited granularity in commenting and sharing",
    detail: "Most tools attach conversation to the whole article.",
  },
  {
    title: "Fragmented research and discussion processes",
    detail: "Readers move between articles, notes, chat, and search tools.",
  },
  {
    title: "Information overload in long articles",
    detail: "Dense content creates fatigue before readers reach the value.",
  },
  {
    title: "Disconnected learning experience for new concepts",
    detail: "Definitions and annotations live outside the reading surface.",
  },
  {
    title: "Inefficient content discovery and exploration",
    detail: "Related ideas are hard to follow when recommendations lack context.",
  },
];

const competitiveCards = [
  {
    title: "WeChat Reading",
    images: [
      {
        src: competitiveReading,
        alt: "WeChat Reading selected text annotation example",
      },
      {
        src: competitiveDiscussion,
        alt: "WeChat Reading paragraph discussion example",
      },
    ],
    body: "Users can copy, underline, and write down their thoughts on selected content.",
  },
  {
    title: "NetEase News",
    images: [
      {
        src: competitiveNews,
        alt: "NetEase News mobile article comment interface",
      },
    ],
    body: "Users can comment on paragraphs.",
  },
  {
    title: "36Kr",
    images: [
      {
        src: competitiveSummary,
        alt: "36Kr AI article summary interface",
      },
    ],
    body: "AI generates article summaries, but users cannot click to jump.",
  },
];

const opportunities = [
  {
    pain: "Comments and shares are usually attached to the full article.",
    opportunity:
      "Let readers highlight a sentence and start discussion directly from that exact context.",
  },
  {
    pain: "Long-form reading can feel tiring before the value becomes clear.",
    opportunity:
      "Use smart notes, progress cues, and summaries to make each section feel approachable.",
  },
  {
    pain: "New concepts send readers away from the page to search elsewhere.",
    opportunity:
      "Place AI explanations beside the article and allow those notes to become part of the outline.",
  },
];

const featureCards = [
  {
    title: "Smart Notes",
    body:
      "The outline combines generated key points, highlighted sentences, and active comment threads so readers can return to the ideas that mattered.",
  },
  {
    title: "Contextual Explanation",
    body:
      "Unfamiliar concepts open in a side panel, preserving the reading flow while giving enough definition to continue.",
  },
  {
    title: "Focused Collaboration",
    body:
      "Readers can switch between their own notes and all community activity, keeping dense articles calm when they need to concentrate.",
  },
];

function SpeedRead() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      [
        ".speed-read-page section",
        ".interview-card",
        ".insight-group",
        ".competitor-card",
        ".opportunity-row",
        ".design-style-image",
        ".feature-system-image",
        ".feature-copy-block",
        ".feature-card",
      ].join(", ")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animatedItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    animatedItems.forEach((item) => item.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="speed-read-page">
      <div className="speed-read-surface">
        <nav className="speed-read-nav" aria-label="Project navigation">
          <Link to="/" className="back-link">
            Back to Portfolio
          </Link>
          
        </nav>

        <section className="speed-read-hero">
          <div className="hero-collab-cursor" aria-hidden="true">
            <div className="cursor-line">
              <span>Timmy</span>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Design by Timmy Huang</p>
            <h1>
            Read deeper with
              <br />
              AI-powered notes
            </h1>
            <p className="hero-lede">
              A reading experience that brings AI summaries, sentence-level
              comments, and contextual explanations into one quiet workspace.
            </p>
          </div>
        </section>

        <section className="project-background">
          <div className="section-kicker">Project Background</div>
          <div className="split-section">
            <h2>
              Streaming media changed attention, but reading tools still treat
              articles as static pages.
            </h2>
            <div className="body-copy">
              <p>
                Technical readers want to discuss specific ideas, annotate
                concepts, and ask for help without losing the thread of the
                article. Existing platforms often separate comments, notes, and
                summaries into disconnected workflows.
              </p>
              <p>
                Speed Read explores how AI-assisted reading can feel practical
                and gentle: useful enough for research, restrained enough for
                long sessions, and collaborative without becoming noisy.
              </p>
            </div>
          </div>
        </section>

        <section className="user-interviews">
          <div className="section-kicker">User Interviews</div>
          <div className="interview-grid">
            {interviewCards.map((card) => (
              <article className="interview-card" key={card.name}>
                <p className="interview-quote">{card.quote}</p>
                <footer className="interview-author">
                  <img src={card.avatar} alt={card.name} />
                  <div>
                    <span>{card.name}</span>
                    <small>{card.role}</small>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          <div className="insight-panel">
            <p className="insight-intro">
              The pain points and needs of long-text reading extracted from user
              interviews:
            </p>
            <div className="insight-columns">
              <div className="insight-group needs">
                <h3>Needs:</h3>
                <div className="insight-list">
                  {insights.map((item) => (
                    <article className="insight-item" key={item.title}>
                      <span className="insight-marker" />
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="insight-group pains">
                <h3>Pain Points:</h3>
                <div className="insight-list">
                  {painPoints.map((item) => (
                    <article className="insight-item" key={item.title}>
                      <span className="insight-marker" />
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="competitive-analysis">
          <h2 className="section-kicker">Competitive Analysis</h2>
          <div className="competitive-layout">
            <div className="analysis-intro">
              <p>
                I researched more than 10 reading apps and similar tech blogs,
                and here I share some of the interactive designs that I find
                interesting.
              </p>
              <p>
                Major news and book reading software are relatively restrained
                in their interactive design for text reading, and{" "}
                <strong>do not use too many elements and colors in the design</strong>,
                in order to avoid affecting the user's concentration on reading.
              </p>
              <p>
                However, for users who like rich and diverse reading methods,{" "}
                <strong>such restraint makes people look a bit boring</strong>.
              </p>
            </div>

            <div className="competitors-grid">
              {competitiveCards.map((item) => (
                <article className="competitor-card" key={item.title}>
                  <div className={`competitor-images ${item.images.length > 1 ? "is-pair" : ""}`}>
                    {item.images.map((image) => (
                      <img src={image.src} alt={image.alt} key={image.alt} />
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="design-opportunities">
          <div className="section-kicker">Pain Points and Opportunities</div>
          <div className="opportunity-list">
            {opportunities.map((item, index) => (
              <article className="opportunity-row" key={item.pain}>
                <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{item.pain}</p>
                <div className="row-arrow" aria-hidden="true" />
                <p>{item.opportunity}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="design-style">
          <div className="section-kicker">Design Style</div>
          <div className="split-section">
            <h2>Paper-like texture with warm technical accents</h2>
            <div className="body-copy">
              <p>
                The interface avoids the cold blue-and-white tone common in
                technical blogs. A soft paper surface, teal borders, and muted
                purple highlights make annotation states visible without
                competing with the article.
              </p>
              <p>
                The right rail keeps smart notes, definitions, and conversation
                close to the text, so readers can move between reading and
                thinking with less context switching.
              </p>
            </div>
          </div>
          <div className="design-style-image">
            <img src={designStyleImage} alt="Speed Read design style exploration" />
          </div>
        </section>

        <section className="smart-notes-feature">
          <div className="section-kicker">Feature System</div>
          <h2 className="feature-system-title">
            Intelligent and practical note interaction system reduces tedious
            operations and relieves the pressure of reading
          </h2>

          <div className="feature-system-layout">
            <div className="feature-system-image">
              <img src={speedReadMockup} alt="Speed Read feature system interface" />
            </div>

            <svg
              className="feature-system-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="195"
              height="128"
              viewBox="0 0 195 128"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M23.9701 51.7072C39.0837 37.7522 59.9216 35.3378 77.3181 39.1074C88.0576 41.4168 97.9197 45.8604 107.476 50.7861C117.033 55.7119 126.468 60.8305 135.414 66.7205C145.391 73.2279 154.514 81.0851 161.154 91.1793C161.879 92.2787 163.839 91.9896 164.854 91.1347C166.053 89.9906 166.012 88.3705 165.287 87.2711C152.929 68.433 132.33 57.559 113.081 47.3603C94.4328 37.5217 73.8767 29.2001 51.1556 33.2794C40.2053 35.2323 29.4332 40.0846 20.6658 48.1323C17.9754 50.5106 21.3046 54.2334 23.9701 51.7072Z"
                fill="#9D9D9D"
              />
              <path
                d="M155.875 54.5744C158.845 66.5451 160.057 79.1282 159.463 92.0403C160.584 91.1763 161.704 90.3122 162.884 89.3557C152.674 85.7054 142.098 82.9859 131.122 81.4311C129.753 81.2544 128.384 81.971 127.89 83.4624C127.43 84.7197 128.08 86.382 129.449 86.5586C140.425 88.1134 151.06 90.7405 161.211 94.4833C162.71 94.9923 164.527 93.3943 164.632 91.7987C165.237 78.5107 164.096 65.4594 160.973 53.0147C160.677 51.6907 159.496 50.8608 158.08 51.2941C156.664 51.7274 155.497 53.2013 155.875 54.5744Z"
                fill="#9D9D9D"
              />
            </svg>

            <div className="feature-system-copy">
              <div className="feature-copy-block">
                <h3>Smart Notes</h3>
                <div className="feature-inline-image">
                  <img src={smartNoteImage} alt="Smart Notes interface detail" />
                </div>
                <p>
                  Smart Notes first generates an outline based on the title of
                  the article, then turns specific article content into key
                  points that help users quickly understand the reading
                  structure.
                </p>
                <p>
                  When users underline a sentence or participate in a comment,
                  that sentence is collected into the outline, helping readers
                  track the ideas they are actively engaging with.
                </p>
              </div>

              <div className="feature-copy-block">
                <h3>Concept Explanation</h3>
                <p>
                  For unfamiliar concepts in the article, AI explanations appear
                  close to the reading area. Users can keep learning without
                  leaving the page or breaking their concentration.
                </p>
                <p className="feature-note">
                  The entire smart note can be copied as Markdown for later
                  organization.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}

export default SpeedRead;
