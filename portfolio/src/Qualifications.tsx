function Qualifications() {
  return (
    <section id="qualifications">
      <div className="container">
        <div className="qual-dark">
          {/* Left Content */}
          <div className="qual-left">
            <div className="qual-logo">
              <svg viewBox="0 0 64 64">
                <path d="M12 32c0-6 4-10 8-8 3 1.5 2 6 5 7 4 1.5 7-2 8-6 1-4-2-8 2-10 3-1.5 6 1 6 4M28 44c-4 2-8 1-10-2-2-3 0-7 3-8 2-.5 4 0 5 2 1.5 3-.5 6 2 8 2 1.5 5 1 7-1 2-2 1-5 3-7 2-2 5-1.5 7 0"/>
              </svg>
            </div>

            <h2 className="qual-heading">Qualifications</h2>
            <div className="qual-underline"></div>

            <div className="qual-content">
              <p className="qual-intro">
                Hey, I'm Suman and I'm currently pursuing B.Tech in AIML. I'm a full-stack developer and UI designer passionate about building with AI, prototyping ideas, and exploring the edge of design and technology.
              </p>

              <div className="qual-block">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10v6"/>
                    <path d="M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  Education
                </h3>
                <div className="edu-item">
                  <div className="degree">B.Tech AIML</div>
                  <div className="school">Netaji Subhash Engineering College • 2024 - 2027</div>
                </div>
              </div>

              <div className="qual-block">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  Technical Skills
                </h3>
                <div className="skills-container">
                  <span className="skill-tag-dark">HTML5 & CSS3</span>
                  <span className="skill-tag-dark">JavaScript (ES6+)</span>
                  <span className="skill-tag-dark">React.js</span>
                  <span className="skill-tag-dark">Node.js</span>
                  <span className="skill-tag-dark">TypeScript</span>
                  <span className="skill-tag-dark">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <a href="#" className="cv-link">↓ curriculum vitae</a>
          </div>

          {/* Right Side with Image and Spinning Circle */}
          <div className="qual-right">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format" 
              alt="Suman portrait" 
              className="qual-right-img"
            />

            <div className="now-playing">
              <div className="now-playing-inner"></div>
              <div className="now-playing-text">
                <svg viewBox="0 0 200 200">
                  <defs>
                    <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
                  </defs>
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      now playing • now playing • now playing • now playing • now playing • 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <div className="dots-grid">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #qualifications {
          background: #1c1c21;
          color: #e6e6e6;
          padding: 0;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        #qualifications .container {
          max-width: 100%;
          padding: 0;
        }

        .qual-dark {
          display: grid;
          grid-template-columns: 1.45fr 0.55fr;
          min-height: 90vh;
        }

        .qual-left {
          padding: 7rem 4vw 5rem 8vw;
          position: relative;
          background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .qual-logo {
          position: absolute;
          top: 2.5rem;
          left: 8vw;
          opacity: 0.7;
        }

        .qual-logo svg {
          width: 42px;
          height: 42px;
          stroke: #d4d4d8;
          stroke-width: 1.5;
          fill: none;
        }

        .qual-heading {
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #f5f5f5;
          margin-bottom: 1.2rem;
          line-height: 1;
          font-family: 'Lato', sans-serif;
        }

        .qual-underline {
          width: 100%;
          max-width: 720px;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.15));
          margin-bottom: 3.5rem;
        }

        .qual-content {
          max-width: 680px;
        }

        .qual-intro {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #d1d1d6;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .qual-block {
          margin-bottom: 2.8rem;
          position: relative;
          padding-left: 0;
        }

        .qual-block h3 {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #9ca3af;
          margin-bottom: 1.2rem;
          font-weight: 600;
        }

        .qual-block h3 svg {
          stroke: currentColor;
          width: 20px;
          height: 20px;
        }

        .degree {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.4rem;
          font-family: 'Playfair Display', serif;
        }

        .school {
          color: #a1a1aa;
          font-size: 0.95rem;
        }

        .edu-item {
          border-left: 2px solid rgba(59,130,246,0.6);
          padding-left: 1.2rem;
          position: relative;
        }

        .edu-item::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3b82f6;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .skill-tag-dark {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.18);
          color: #d4d4d8;
          padding: 0.5rem 1.1rem;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 400;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
          cursor: default;
        }

        .skill-tag-dark:hover {
          border-color: #3b82f6;
          color: #fff;
          background: rgba(59,130,246,0.12);
          transform: translateY(-2px);
        }

        .cv-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
          color: #e6e6e6;
          font-size: 1.05rem;
          font-weight: 400;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .cv-link:hover {
          color: #fff;
          border-color: #fff;
          gap: 0.7rem;
        }

        /* Right Side Styles - FIXED with overflow: visible */
        .qual-right {
          position: relative;
          height: 100%;
          min-height: 600px;
          overflow: visible !important;
        }

        .qual-right-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-bottom-left-radius: 80px;
          filter: saturate(0.9) contrast(1.05);
        }

        .now-playing {
          position: absolute;
          top: 50%;
          left: -75px;
          transform: translateY(-50%);
          width: 150px;
          height: 150px;
          z-index: 3;
        }

        .now-playing-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #1c1c21;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          animation: spin 18s linear infinite;
          position: relative;
        }

        .now-playing-inner::after {
          content: '';
          position: absolute;
          inset: 12px;
          border-radius: 50%;
          background: url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400') center/cover;
          box-shadow: inset 0 0 0 4px #1c1c21;
        }

        .now-playing-text {
          position: absolute;
          inset: -12px;
          animation: spin 18s linear infinite reverse;
        }

        .now-playing-text svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .now-playing-text text {
          fill: #bcbcbc;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: lowercase;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .dots-grid {
          position: absolute;
          top: 3rem;
          right: 2.5rem;
          display: grid;
          grid-template-columns: repeat(3, 7px);
          gap: 7px;
          opacity: 0.6;
          z-index: 2;
        }

        .dots-grid span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6b7280;
          transition: all 0.3s ease;
        }

        .dots-grid span:nth-child(7),
        .dots-grid span:nth-child(8),
        .dots-grid span:nth-child(9) {
          background: #10b981;
        }

        /* Responsive Styles */
        @media (max-width: 900px) {
          .qual-dark {
            grid-template-columns: 1fr;
          }

          .qual-right {
            height: 420px;
            order: -1;
          }

          .qual-right-img {
            border-bottom-left-radius: 40px;
          }

          .now-playing {
            left: 20px;
            top: auto;
            bottom: -60px;
            transform: none;
            width: 120px;
            height: 120px;
          }

          .qual-left {
            padding: 5rem 1.5rem 4rem;
          }

          .qual-logo {
            left: 1.5rem;
            top: 1.5rem;
          }

          .qual-heading {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 480px) {
          .now-playing {
            left: 10px;
            bottom: -50px;
            width: 100px;
            height: 100px;
          }

          .qual-heading {
            font-size: 2.2rem;
          }

          .qual-intro {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Qualifications