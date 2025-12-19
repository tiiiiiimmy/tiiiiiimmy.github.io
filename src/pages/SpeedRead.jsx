import React from "react";
import { Link } from "react-router-dom";
import "./SpeedRead.scss";

function SpeedRead() {
  return (
    <div className="speed-read-page">
      {/* Background Elements */}
      <div className="background-gradient" />
      <div className="background-pattern" />
      <div className="radial-gradient-overlay" />

      {/* Main Content */}
      <div className="main-content">
        {/* Animated Cursor */}
        <div className="animated-cursor">
          <div className="cursor-line">
            <div className="cursor-text">Timmy</div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <p className="design-credit">Design by Timmy Huang</p>
          <h1 className="hero-title">
            Smart blog notes,<br />
            make articles easy to read and enjoyable to read
          </h1>
          <p className="hero-subtitle">
            In the era of streaming media, what kind of reading experience is efficient, gentle and convenient?
          </p>
        </section>

        {/* Project Background Section */}
        <section className="project-background">
          <h2 className="section-heading">Project Background</h2>
          <div className="background-grid">
            <div className="background-text">
              <p>
                In today's era of streaming media and information overload, traditional reading experiences often struggle to keep up with the way users consume and process knowledge.
              </p>
              <p>
                For many readers—especially those engaging with technical or long-form content—existing platforms offer <strong>limited interactivity, lack contextual understanding</strong>, and fail to provide meaningful ways to <strong>collaborate or learn efficiently</strong>.
              </p>
            </div>
            <div className="background-text">
              <p>
                Through user research, it became evident that people want a reading experience that is <strong>efficient, focused, and intelligent</strong>. Readers hope to easily discuss specific ideas, annotate key concepts, and let AI assist them in summarizing or explaining complex topics. However, most existing blog or reading platforms either restrict user interaction to broad comments or overwhelm readers with unstructured information.
              </p>
            </div>
            <div className="background-text">
              <p>
                This project aims to explore how <strong>AI-assisted reading experiences</strong> can make online articles not only more accessible but also more <strong>engaging, collaborative, and insightful</strong>, helping users truly connect with the content they read.
              </p>
            </div>
            <div className="background-image">
              <img src="/images/speed-read/project-bg.png" alt="Project Background" />
            </div>
          </div>
        </section>

        {/* User Interviews Section */}
        <section className="user-interviews">
          <h2 className="section-heading">User Interviews</h2>
          <div className="interviews-grid">
            <div className="interview-card">
              <p className="interview-quote">
                When reading technology articles, I often only want to discuss and share one or two key knowledge points, but the software I currently use can only comment on the entire article. I often have to quote when commenting, or copy the sentences to other platforms for discussion.
              </p>
              <div className="interview-author">
                <img src="/images/speed-read/user1.jpg" alt="David Ren" />
                <div className="author-info">
                  <strong>David Ren</strong>
                  <p>Embedded development engineer, heavy user of technology forums</p>
                </div>
              </div>
            </div>

            <div className="interview-card">
              <p className="interview-quote">
                When my friends and I start researching and discussing new technologies, we often build a notion together to update and maintain data from different sources. At the same time, the underlined comments in the notion also allow us to focus on the specific content for discussion. For some overly long articles, I prefer to let AI help me sort out the content first.
              </p>
              <div className="interview-author">
                <img src="/images/speed-read/user2.jpg" alt="Nora" />
                <div className="author-info">
                  <strong>Nora</strong>
                  <p>Test engineer, web3 technology enthusiast</p>
                </div>
              </div>
            </div>

            <div className="interview-card">
              <p className="interview-quote">
                When I read literature every day, I often encounter many unfamiliar concepts, which need to be searched and annotated, and organized together with the corresponding content. At the same time, I hope that the relevant recommendations of literature can be more intelligent, so that I can better explore articles in related fields.
              </p>
              <div className="interview-author">
                <img src="/images/speed-read/user3.jpg" alt="Dewey" />
                <div className="author-info">
                  <strong>Dewey</strong>
                  <p>Master of Artificial Intelligence, read a lot of literature every day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points & Needs */}
          <div className="insights-section">
            <p className="insights-intro">
              The pain points and needs of long-text reading extracted from user interviews:
            </p>
            <div className="insights-grid">
              <div className="insights-column">
                <h3 className="insights-title">Needs:</h3>
                <ul className="insights-list">
                  <li>Selective content sharing and discussion</li>
                  <li>Collaborative knowledge building</li>
                  <li>AI-assisted content sorting and summarization</li>
                  <li>Contextual annotations and concept organization</li>
                  <li>Intelligent content recommendations</li>
                </ul>
              </div>
              <div className="insights-column">
                <h3 className="insights-title">Pain Points:</h3>
                <ul className="insights-list">
                  <li>Limited granularity in commenting and sharing</li>
                  <li>Fragmented research and discussion processes</li>
                  <li>Information overload in long articles</li>
                  <li>Disconnected learning experience for new concepts</li>
                  <li>Inefficient content discovery and exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis Section */}
        <section className="competitive-analysis">
          <h2 className="section-heading">Competitive Analysis</h2>
          <div className="analysis-intro">
            <p>
              I researched more than 10 reading apps and similar tech blogs, and here I share some of the interactive designs that I find interesting.
            </p>
            <p>
              Major news and book reading software are relatively restrained in their interactive design for text reading, and <strong>do not use too many elements and colors in the design</strong>, in order to avoid affecting the user's concentration on reading.
            </p>
            <p>
              However, for users who like rich and diverse reading methods, <strong>such restraint makes people look a bit boring</strong>.
            </p>
          </div>
          <div className="competitors-grid">
            <div className="competitor-card">
              <div className="competitor-image">
                <img src="/images/speed-read/wechat-reading.png" alt="WeChat Reading" />
              </div>
              <h3>WeChat Reading</h3>
              <p>Users can copy, underline, and write down their thoughts on selected content</p>
            </div>
            <div className="competitor-card">
              <div className="competitor-image">
                <img src="/images/speed-read/netease-news.png" alt="NetEase News" />
              </div>
              <h3>NetEase News</h3>
              <p>Users can comment on paragraphs</p>
            </div>
            <div className="competitor-card">
              <div className="competitor-image">
                <img src="/images/speed-read/36kr.png" alt="36Kr" />
              </div>
              <h3>36Kr</h3>
              <p>AI generates article summaries, but users cannot click to jump</p>
            </div>
          </div>
        </section>

        {/* Pain Points & Design Opportunities */}
        <section className="design-opportunities">
          <h2 className="section-heading">Pain points and design opportunities</h2>
          <div className="opportunities-grid">
            <div className="opportunity-row">
              <div className="pain-point">
                <h3>Pain Points</h3>
                <p>Limited granularity in commenting and sharing</p>
                <p>Fragmented research and discussion processes</p>
              </div>
              <div className="arrow">→</div>
              <div className="opportunity">
                <h3>Design Opportunities</h3>
                <p>Implement a real-time collaborative annotation system that allows users to highlight and comment on specific parts of the article.</p>
              </div>
            </div>

            <div className="opportunity-row">
              <div className="pain-point">
                <h3>Pain Points</h3>
                <p>Reading anxiety and boredom associated with long-form content</p>
              </div>
              <div className="arrow">→</div>
              <div className="opportunity">
                <h3>Design Opportunities</h3>
                <p>Use AI to generate an automatic summary system, display reading progress, and give users staged encouragement</p>
              </div>
            </div>

            <div className="opportunity-row">
              <div className="pain-point">
                <h3>Pain Points</h3>
                <p>Disconnected learning experience for new concepts</p>
              </div>
              <div className="arrow">→</div>
              <div className="opportunity">
                <h3>Design Opportunities</h3>
                <p>Explanation of unfamiliar concepts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Style Section */}
        <section className="design-style">
          <h2 className="section-heading">Design style</h2>
          <div className="style-grid">
            <div className="style-showcase">
              <img src="/images/speed-read/design-showcase.png" alt="Design Style Showcase" />
            </div>
            <div className="style-explanation">
              <h3>Accessible and comfortable technology blog reading experience</h3>
              <p>
                In the traditional stereotype, technical articles and blogs are often designed with a blue & white technology feel, giving people a cold and unapproachable feeling.
              </p>
              <p>
                However, such a design is not really suitable for long-term reading experience, nor can it better encourage readers to join in reading.
              </p>
              <p>
                Therefore, I tried to use a paper-like texture and a gentle background color, hoping to provide a friendly, comfortable and elegant reading experience. Improve the accessibility of the article
              </p>
              <div className="style-examples">
                <img src="/images/speed-read/tech-blog-example1.png" alt="Tech Blog Example 1" />
                <img src="/images/speed-read/tech-blog-example2.png" alt="Tech Blog Example 2" />
              </div>
              <p className="example-caption">blue & white technology feel</p>
            </div>
          </div>
        </section>

        {/* Smart Notes Feature Section */}
        <section className="smart-notes-feature">
          <h2 className="section-heading">
            Intelligent and practical note interaction system reduces the tedious operations of users
            and relieves the pressure of reading
          </h2>

          <div className="feature-grid">
            <div className="feature-showcase">
              <img src="/images/speed-read/smart-notes-ui.png" alt="Smart Notes Interface" />
            </div>
            <div className="feature-explanation">
              <div className="smart-notes-demo">
                <div className="notes-panel">
                  <strong className="notes-title">Smart Notes</strong>
                  <ul className="notes-outline">
                    <li><strong>Operational Challenges of GenAI</strong></li>
                    <li className="highlighted">
                      <span className="highlight-dot" />
                      Therefore, it is crucial to select a model that aligns with available budget and accuracy needs of the task
                    </li>
                    <li className="selected">
                      <span className="highlight-dot purple" />
                      This implies that the fundamental decision (which LLM to use) needs to be revisited frequently. And we need to maintain the flexibility to change our selection of LLMs for various use cases.
                      <div className="engagement-stats">
                        <span className="likes">👁️ 536</span>
                        <span className="comments">💬 12</span>
                      </div>
                    </li>
                    <li><strong>CB-GPT, our GenAI platform at Coinbase</strong></li>
                    <li>
                      <ul>
                        <li><strong>Multi-Cloud, Multi-LLM Architecture</strong></li>
                      </ul>
                    </li>
                  </ul>
                  <button className="copy-markdown-btn">Copy as Markdown 📋</button>
                </div>
                <div className="filter-option">
                  <button className="visibility-toggle">👁️ Only me ▼</button>
                  <p className="filter-note">
                    When you select only me in this drop-down box, only your own comments and comments will be displayed. When you select show all, all users' comments and comments will be displayed.
                  </p>
                </div>
              </div>

              <div className="feature-description">
                <p>
                  Smart Notes will first generate an outline based on the title of the article, and then generate key points based on the specific content, which can help users quickly understand the content of the article.
                </p>
                <p>
                  When the user underlines a specific sentence, the underlined sentence will appear on the outline, and the user can copy the entire outline to his or her own note software for organization.
                </p>
                <p>
                  The entire smart note can be directly copied to Markdown format, which is convenient for users to paste into their own note software for sorting and summarizing
                </p>
                <p className="feature-note">Click on the key points to jump immediately</p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="additional-features">
            <div className="feature-item">
              <img src="/images/speed-read/concept-explanation.png" alt="Concept Explanation" />
              <div className="feature-text">
                <p>
                  For unfamiliar concepts in the article, AI is used to automatically generate explanations to help users better understand the article. At the same time, the content in the explanation can also be underlined and added to the notes to form a complete note system
                </p>
                <p>
                  Users can also choose to collapse this definition area and participate more attentively in the discussion in the comment area.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <img src="/images/speed-read/comment-tracking.png" alt="Comment Tracking" />
              <div className="feature-text">
                <p>
                  If the user participates in a comment reply to a sentence, then this sentence will also be added to the outline. This helps users automatically track the content they are participating in the interaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
        <div className="back-to-portfolio">
          <Link to="/" className="back-button">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpeedRead;
