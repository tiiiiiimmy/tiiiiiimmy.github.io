import React from 'react';

function App() {
  return (
    <div style={{ 
      background: '#FFFFFF', 
      minHeight: '100vh', 
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background SVG Element */}
      <div style={{
        position: 'absolute',
        top: -1423,
        left: -414,
        width: 3553,
        height: 2652,
        background: 'transparent',
        border: '300px solid #C8FF32',
        borderRadius: '50%',
        zIndex: 0,
        opacity: 0.1
      }} />
      
      {/* Main Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: 1920, 
        margin: '0 auto',
        padding: '72px 90px'
      }}>
        
        {/* Top Section with Large Titles */}
        <section style={{ 
          marginTop: 604,
          maxWidth: 1216
        }}>
          <div style={{ 
            maxWidth: 1069
          }}>
            {/* Main Titles */}
            <div style={{
              fontFamily: 'Bruno Ace SC, sans-serif',
              fontWeight: 400,
              fontSize: 128,
              lineHeight: 1.187,
              letterSpacing: '-0.06em',
              textTransform: 'uppercase',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #000000 0%, #666666 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 0
            }}>
              dev & design
            </div>
            
            <div style={{
              fontFamily: 'Bruno Ace SC, sans-serif',
              fontWeight: 400,
              fontSize: 96,
              lineHeight: 1.187,
              letterSpacing: '-0.06em',
              textTransform: 'uppercase',
              textAlign: 'left',
              color: '#575757',
              marginBottom: 24
            }}>
              portfolio
            </div>
            
            {/* Subtitle */}
            <div style={{ 
              fontFamily: 'Anek Gujarati, sans-serif', 
              fontWeight: 300, 
              fontSize: 28, 
              color: 'rgba(0,0,0,0.6)', 
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              Efficient work enables your needs to be implemented from design to development
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        {/* Group 21 - Vertical Line */}
        <div style={{
          position: 'absolute',
          left: 96,
          top: 120,
          width: 7,
          height: 519,
          background: '#333333'
        }}>
          <div style={{
            position: 'absolute',
            left: -1,
            top: -3,
            width: 7,
            height: 23,
            background: '#333333'
          }} />
        </div>

        {/* Group 22 - Horizontal Line */}
        <div style={{
          position: 'absolute',
          right: 90,
          top: 959,
          width: 638,
          height: 7,
          background: 'transparent'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 4,
            width: 638,
            height: 1,
            background: '#333333'
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: 23,
            height: 7,
            background: '#333333'
          }} />
        </div>

        {/* Introduction Section - Lower Position */}
        <section style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          padding: 10,
          marginTop: 566,
          marginLeft: 1
        }}>
          <div style={{ 
            fontFamily: 'Anek Gujarati, sans-serif', 
            fontWeight: 500, 
            fontSize: 64, 
            color: '#272727', 
            lineHeight: 1.3125,
            textAlign: 'left'
          }}>
            Hi, Timmy here!<br />
            A full stack developer & Product Designer
          </div>
        </section>

        {/* Social Links */}
        <section style={{ 
          display: 'flex', 
          gap: 18, 
          alignItems: 'center',
          marginTop: 127,
          marginLeft: 11
        }}>
          <a href="https://github.com/tiiiiiimmy" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'Anek Gujarati, sans-serif',
            fontWeight: 300,
            fontSize: 24,
            lineHeight: 1.875,
            color: '#272727',
            textDecoration: 'none',
            width: 74
          }}>Github</a>
          
          <a href="https://linkedin.com/in/tiiiiiimmy" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'Anek Gujarati, sans-serif',
            fontWeight: 300,
            fontSize: 24,
            lineHeight: 1.875,
            color: '#272727',
            textDecoration: 'none',
            width: 92
          }}>Linkedin</a>
          
          <a href="mailto:timmy@example.com" style={{
            fontFamily: 'Anek Gujarati, sans-serif',
            fontWeight: 300,
            fontSize: 24,
            lineHeight: 1.875,
            color: '#272727',
            textDecoration: 'none',
            width: 44
          }}>Mail</a>
        </section>

        {/* Skills Section */}
        <section style={{ 
          display: 'flex', 
          gap: 144, 
          marginTop: 211,
          marginLeft: 11
        }}>
          {/* Dev Skills */}
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.11,
            color: '#333333'
          }}>
            <div style={{ marginBottom: 16 }}>Dev</div>
            <div style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2 }}>
              Java, C#, JS<br />
              HTML, CSS<br /><br />
              React, Svelte<br />
              Node.JS, ASP.NET<br />
              SQLite, MongoDB<br /><br />
              AWS, Azure cloud<br />
              Agile (Sprint, Scrum)
            </div>
          </div>

          {/* Design Skills */}
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.11,
            color: '#333333'
          }}>
            <div style={{ marginBottom: 16 }}>Design</div>
            <div style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2 }}>
              UXI Design<br />
              Graphic Design<br /><br />
              Figma<br />
              Wix<br />
              Adobe suite
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ 
          marginTop: 100,
          marginLeft: 11,
          width: 798,
          height: 251
        }}>
          <h2 style={{
            fontFamily: 'Anek Gujarati, sans-serif',
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.11,
            color: '#79A402',
            margin: '0 0 61px 0'
          }}>
            Education
          </h2>
          {/* Education content can be added here */}
        </section>

        {/* My Projects Section */}
        <section style={{ marginTop: 493 }}>
          <h2 style={{
            fontFamily: 'Anek Gujarati, sans-serif',
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.11,
            color: '#333333',
            marginBottom: 51,
            marginLeft: 15,
            width: 207,
            height: 44
          }}>
            My Projects
          </h2>
          
          {/* Project Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 808px))',
            gridTemplateRows: 'repeat(2, auto)',
            gap: '101px 11px',
            marginLeft: 11,
            maxWidth: 1627
          }}>
            {/* Project Card 1 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              maxWidth: 808
            }}>
              <div style={{
                width: '100%',
                height: 534,
                backgroundImage: 'url(/images/project1.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 8,
                backgroundColor: '#C4C4C4'
              }} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 465
                }} />
                <p style={{ 
                  margin: 0,
                  fontFamily: 'Anek Gujarati, sans-serif',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.52,
                  color: '#333'
                }}>I am a passionate and fast-learning developer with hands-on experience in Java, Python, Git, Agile</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              maxWidth: 808
            }}>
              <div style={{
                width: '100%',
                height: 534,
                background: '#C4C4C4',
                borderRadius: 8
              }} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 465
                }} />
                <p style={{ 
                  margin: 0,
                  fontFamily: 'Anek Gujarati, sans-serif',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.52,
                  color: '#333'
                }}>I am a passionate and fast-learning developer with hands-on experience in Java, Python, Git, Agile</p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              maxWidth: 808
            }}>
              <div style={{
                width: '100%',
                height: 534,
                background: '#C4C4C4',
                borderRadius: 8
              }} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 465
                }} />
                <p style={{ 
                  margin: 0,
                  fontFamily: 'Anek Gujarati, sans-serif',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.52,
                  color: '#333'
                }}>I am a passionate and fast-learning developer with hands-on experience in Java, Python, Git, Agile</p>
              </div>
            </div>

            {/* Project Card 4 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              maxWidth: 808
            }}>
              <div style={{
                width: '100%',
                height: 534,
                background: '#C4C4C4',
                borderRadius: 8
              }} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 465
                }} />
                <p style={{ 
                  margin: 0,
                  fontFamily: 'Anek Gujarati, sans-serif',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.52,
                  color: '#333'
                }}>I am a passionate and fast-learning developer with hands-on experience in Java, Python, Git, Agile</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Slogan at Bottom */}
        <section style={{ 
          textAlign: 'center', 
          marginTop: 580,
          marginLeft: 398
        }}>
          <h1 style={{
            fontFamily: 'Bruno Ace SC, sans-serif',
            fontSize: 48,
            lineHeight: 1.187,
            background: 'linear-gradient(90deg, #000000 0%, #666666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            margin: 0,
            width: 764,
            height: 114
          }}>
            Always try, always learn, and strive for excellence
          </h1>
        </section>
      </div>
    </div>
  );
}

export default App; 