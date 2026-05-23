import { useEffect, useRef } from "react";
import project1Img from "./assets/project1.png";
import project2Img from "./assets/sign.png";
import project3Img from "./assets/tumor.jpg";

interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    category: "Web Application",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers. Features data visualization and inventory management.",
    tags: ["Analytics", "Inventory"],
    image: project1Img,
    liveLink: "#",
    githubLink: "#",
  },
  {
    category: "AI Healthcare",
    title: "Brain Tumor Detection",
    description:
      "An AI-powered brain tumor detection system using deep learning and MRI scan analysis.",
    tags: ["AI", "Healthcare", "Deep Learning"],
    image: project3Img,
    liveLink: "#",
    githubLink: "#",
  },
  {
    category: "AI Accessibility",
    title: "Sign Language Detection",
    description:
      "An AI-powered sign language interpretation system that converts hand gestures into understandable text.",
    tags: ["AI", "Sign Language", "Computer Vision"],
    image: project2Img,
    liveLink: "#",
    githubLink: "#",
  },
];

function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    if (!track || !container) return;

    function updateScroll() {
      // Add null checks for all DOM element accesses
      if (!track || !container) return;
      
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const offset = window.scrollY - containerTop;
      const totalScrollDistance = containerHeight - windowHeight;

      let scrollPercentage = offset / totalScrollDistance;
      scrollPercentage = Math.max(0, Math.min(1, scrollPercentage));

      const maxTranslate = track.scrollHeight - windowHeight;
      const targetY = -maxTranslate * scrollPercentage;

      track.style.transform = `translateY(${targetY}px)`;
    }

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <section id="projects">
      <div className="scroll-container" ref={containerRef}>
        <div className="sticky-wrapper">
          <div className="vertical-track" ref={trackRef}>
            {projectsData.map((project, index) => (
              <article className="card" key={index}>
                <div className="card-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img"
                  />
                </div>

                <div className="card-content-wrapper">
                  <div className="category">{project.category}</div>
                  <h2>{project.title}</h2>
                  <p className="body-text">{project.description}</p>
                  <div className="footer-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --primary-color: #3b82f6;
          --secondary-color: #1e293b;
          --text-main: #334155;
        }

        #projects {
          padding: 0;
          background: #0f0f0f;
          position: relative;
        }

        .scroll-container {
          height: 320vh;
          position: relative;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .vertical-track {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 300vh;
        }

        .card {
          width: 100%;
          height: 100vh;
          display: grid;
          flex-shrink: 0;
        }

        .card-image-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-content-wrapper {
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8vw;
        }

        .category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #888;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        h2 {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          line-height: 1;
          margin-bottom: 3rem;
          font-weight: 400;
          color: #111;
        }

        .body-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #444;
          font-weight: 300;
          margin-bottom: 5rem;
          max-width: 600px;
        }

        .footer-tags {
          border-top: 1px solid #ddd;
          padding-top: 2rem;
          display: flex;
          gap: 3rem;
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          color: #666;
          font-style: italic;
        }

        @media (min-width: 1024px) {
          .card {
            grid-template-columns: 60% 40%;
          }
          .card-content-wrapper {
            grid-column: 2;
          }
        }

        @media (max-width: 1023px) {
          .card {
            grid-template-columns: 1fr;
            grid-template-rows: 50vh 1fr;
          }
          .card-content-wrapper {
            padding: 3rem;
          }
          h2 {
            font-size: 3rem;
          }
          .body-text {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;