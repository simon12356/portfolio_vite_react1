function AboutMe() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="role">Full Stack Developer & UI Designer</span>
            <h1>Hi, I'm Suman.<br/>I build digital experiences.</h1>
            
            <div className="about-manifesto">
              <p>
                I turn ambiguity
                <svg className="doodle scribble" viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 16c3-4 6-2 8 0s4 4 7 2c2-1.5 1-4-1-5s-5 0-7 2-4 5-7 4"/>
                </svg>
                into clear product design direction and
                <svg className="doodle spark" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.6">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M16 6l-2 2M6 16l2-2"/>
                </svg>
                <br/>ship with cross-functional teams <span className="box">at speed.</span>
              </p>
              <p>
                <svg className="doodle star" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.6">
                  <path d="M12 2l2 5 5 1-4 3 1 5-4-2.5L8 16l1-5-4-3 5-1z"/>
                </svg>
                <span className="box">I build with AI,</span> prototyping ideas and exploring
                <br/>the edge of design and technology.
              </p>
            </div>

            <a href="#projects" className="btn-sm" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>View My Work</a>
          </div>
          <div className="profile-img-wrapper">
            <img src="https://picsum.photos/seed/profile/400/400" alt="Suman Profile" className="profile-img"/>
          </div>
        </div>
      </div>

      <style>{`
        #about { 
          background: linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%); 
          padding: 6rem 0; 
        }
        
        .container { 
          max-width: 1100px; 
          margin: 0 auto; 
          padding: 0 20px; 
        }
        
        .about-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 4rem; 
          align-items: center; 
        }
        
        .about-text h1 { 
          font-size: 3rem; 
          line-height: 1.2; 
          color: #1e293b; 
          margin-bottom: 1.5rem; 
        }
        
        .about-text .role { 
          color: #3b82f6; 
          font-weight: 600; 
          display: block; 
          margin-bottom: 1rem; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          font-size: 0.9rem; 
        }
        
        .profile-img-wrapper { 
          position: relative; 
          display: flex; 
          justify-content: center; 
        }
        
        .profile-img { 
          width: 450px; 
          height: 450px; 
          object-fit: cover; 
          border-radius: 30% 70% 30% / 30% 30% 70% 70%; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.15); 
          animation: morph 8s ease-in-out infinite; 
          border: 5px solid white; 
        }
        
        @keyframes morph { 
          0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 
          50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } 
          100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 
        }
        
        .btn-sm { 
          font-size: 0.85rem; 
          padding: 0.4rem 1rem; 
          border-radius: 4px; 
          background: #1e293b; 
          color: white; 
          transition: all 0.3s ease; 
          display: inline-block; 
          cursor: pointer; 
          text-decoration: none;
        }
        
        .btn-sm:hover { 
          background: #3b82f6; 
        }

        /* Manifesto style - INCREASED WIDTH */
        .about-manifesto {
          font-family: 'Courier Prime', 'Courier New', monospace;
          background-color: #fcfaf6;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 22px 22px;
          padding: 2.5rem 2rem;
          border-radius: 8px;
          color: #2d2d2d;
          text-align: center;
          line-height: 2.1;
          font-size: 1.3rem;
          position: relative;
          max-width: 100%;
          width: 100%;
          margin-bottom: 2rem;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }
        
        .about-manifesto p { 
          margin: 0.8rem 0; 
          position: relative; 
        }
        
        .about-manifesto .box {
          display: inline-block;
          border: 1.5px solid #3a3a3a;
          padding: 3px 10px 2px;
          border-radius: 4px;
          margin: 0 4px;
          background: transparent;
          transform: translateY(1px);
          font-family: 'Courier Prime', 'Courier New', monospace;
        }
        
        .about-manifesto .doodle { 
          position: absolute; 
          pointer-events: none; 
          opacity: 0.9; 
        }
        
        .doodle.scribble { 
          top: -22px; 
          left: 32%; 
          width: 34px; 
          height: 34px; 
        }
        
        .doodle.spark { 
          top: -18px; 
          right: 28%; 
          width: 18px; 
          height: 18px; 
        }
        
        .doodle.star { 
          left: -28px; 
          top: 4px; 
          width: 24px; 
          height: 24px; 
        }
        
        @media(max-width:768px){
          .about-grid { 
            grid-template-columns: 1fr; 
            text-align: center; 
          }
          
          .profile-img { 
            width: 250px; 
            height: 250px; 
            margin: 0 auto; 
          }
          
          .about-text h1 { 
            font-size: 2.2rem; 
          }
          
          .about-manifesto { 
            font-size: 0.95rem; 
            padding: 2rem 1rem; 
            background-size: 18px 18px; 
            margin: 0 auto 2rem;
          }
          
          .doodle.scribble, 
          .doodle.spark, 
          .doodle.star { 
            display: none; 
          }
        }
      `}</style>
    </section>
  )
}

export default AboutMe