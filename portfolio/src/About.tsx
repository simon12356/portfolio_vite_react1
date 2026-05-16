import tornPaper from './assets/torn5.png'
import lushBush from './assets/lush.png'
import icedImage from './assets/iced.png'
import tourImg from './assets/tour1.png'
import dashboardImg from './assets/dashboard.png'
import idImg from './assets/id.png'
import folderImg from './assets/folder.png'
import oggyImg from './assets/oggy.png'
import signatureImg from './assets/signature.png'

function About() {
  return (
    <section className="about-section">
      {/* Grid Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to right, #999 1px, transparent 1px),
            linear-gradient(to bottom, #999 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          filter: 'blur(1.2px)',
          opacity: 0.85,
          zIndex: -1,
          pointerEvents: 'none',
          transform: 'translate3d(0,0,0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Paper + Bush + Iced Wrapper */}
      <div className="image-wrapper">
        <img src={tornPaper} className="paper" alt="Torn Paper" />
        <img src={lushBush} className="bush" alt="Lush Bush" />
        <img src={icedImage} className="iced" alt="Iced" />
      </div>

      {/* Tour */}
      <img src={tourImg} className="tour" alt="Tour" />

      {/* Dashboard */}
      <img src={dashboardImg} className="dashboard" alt="Dashboard" />

      {/* ID Card */}
      <img src={idImg} className="id" alt="ID" />

      {/* Folder with Oggy */}
      <div className="folder-wrap">
        <img src={oggyImg} className="oggy" alt="Oggy" />
        <img src={folderImg} className="folder" alt="Folder" />
      </div>

      {/* Signature */}
      <img src={signatureImg} className="signature" alt="My Signature" />

      <style>{`
        .about-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          height: 100dvh;
          padding-top: clamp(60px, 10vh + 70px, 120px);
          overflow: hidden;
        }

        .signature {
          position: absolute; 
          left: 50%;
          top: 61%;
          transform: translate(-50%, -50%);
          width: clamp(200px, 22%, 480px);
          height: auto;
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.18));
          opacity: 0.95;
        }

        .image-wrapper { 
          position: relative; 
          width: 100%;
          height: 100%;
          transform: rotate(-5deg);
          pointer-events: none;
        }
        
        .paper { 
          display: block; 
          width: clamp(180px, 31%, 700px);
          max-width: 700px; 
          height: auto; 
          position: absolute; 
          left: 50%;
          top: 18%;
          transform: translate(-50%, -50%) rotate(-5deg);
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
          background-color: transparent; 
          z-index: 1; 
          pointer-events: auto; 
        }
        .paper:hover { 
          transform: translate(-50%, -50%) rotate(0deg) scale(1.1); 
        }
        
        .bush { 
          display: block; 
          position: absolute; 
          width: clamp(100px, 15%, 470px);
          max-width: 60vw; 
          height: auto; 
          left: 39%;
          top: -3%;
          transform: translate(-50%, -45px);
          transition: transform 0.4s ease; 
          z-index: 2; 
          pointer-events: auto; 
        }
        .bush:hover { 
          animation: bushBob 0.6s ease-in-out infinite alternate; 
        }
        
        @keyframes bushBob { 
          from { transform: translate(-50%, -45px); } 
          to { transform: translate(-50%, -25px); } 
        }
        
        .iced { 
          display: block; 
          position: absolute; 
          width: clamp(40px, 5%, 500px);
          max-width: 50vw; 
          height: auto; 
          left: 55%;
          top: 10%;
          transform: translate(-50%, 10px);
          z-index: 3; 
          pointer-events: auto; 
        }
        .iced:hover { 
          animation: icedBob 0.6s ease-in-out infinite alternate; 
        }
        
        @keyframes icedBob { 
          from { transform: translate(-50%, 10px); } 
          to { transform: translate(-50%, -15px); } 
        }
        
        .tour { 
          position: absolute; 
          width: clamp(180px, 31%, 650px);
          max-width: 650px; 
          height: auto; 
          left: 50%;
          top: 17%;
          transform: translate(40%, 0) rotate(5deg);
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
          cursor: pointer; 
          z-index: 10; 
        }
        .tour:hover { 
          transform: translate(40%, 0) rotate(0deg) scale(1.35); 
        }
        
        .dashboard { 
          position: absolute; 
          width: clamp(200px, 39%, 800px);
          max-width: 600px; 
          height: auto; 
          left: 84%;
          top: 71%;
          transform: translate(-50%, -50%) rotate(5deg);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
          cursor: pointer; 
          z-index: 9; 
        }
        .dashboard:hover { 
          transform: translate(-50%, -50%) rotate(0deg) scale(1.15); 
        }
        
        .id { 
          position: absolute; 
          width: clamp(280px, 23%,490px);
          
          height: auto; 
          left: 3%;
          top: 0%;
          transform-origin: top center; 
          animation: pendulum 3.5s ease-in-out infinite alternate; 
          z-index: 8; 
          pointer-events: auto; 
        }
        
        @keyframes pendulum { 
          from { transform: rotate(-14deg); } 
          to { transform: rotate(14deg); } 
        }
        
        .folder-wrap { 
          position: absolute; 
          left: 17%;
          top: 72%;
          width: clamp(40px, 7%, 250px);
          max-width: 250px; 
          height: auto; 
          z-index: 20; 
          pointer-events: auto; 
        }
        
        .folder { 
          display: block; 
          width: 100%; 
          height: auto; 
          transform: rotate(5deg); 
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
          cursor: pointer; 
        }
        .folder-wrap:hover .folder { 
          transform: rotate(0deg) scale(1.25); 
        }
        
        .oggy { 
          position: absolute; 
          bottom: 85%; 
          left: 50%; 
          width: clamp(60px, 90%, 220px);
          max-width: 220px; 
          height: auto; 
          transform: translateX(-50%) scale(0); 
          opacity: 0; 
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease; 
          pointer-events: none; 
          z-index: 21; 
          transform-origin: bottom center; 
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.3)); 
        }
        .folder-wrap:hover .oggy { 
          transform: translateX(-50%) scale(1); 
          opacity: 1; 
        }

        @media (max-width: 768px) {
          .paper { 
            left: 50%;
            top: 35%;
          }
          .bush { left: 15%; }
          .iced { left: 60%; top: 18%; }
          .tour { transform: translate(20%, 0) rotate(5deg); }
          .tour:hover { transform: translate(20%, 0) rotate(0deg) scale(1.35); }
          .dashboard { left: 50%; top: 65%; }
          .folder-wrap { left: 10%; }
        }
      `}</style>
    </section>
  )
}

export default About