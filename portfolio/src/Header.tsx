import { useState, useEffect } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [previewImg, setPreviewImg] = useState('')
  const [previewVisible, setPreviewVisible] = useState(false)

  const menuItems = [
    { label: 'About', image: 'https://picsum.photos/seed/about/800/1000', href: '#about' },
    { label: 'Location', image: 'https://picsum.photos/seed/location/800/1000', href: '#abode' },
    { label: 'Qualifications', image: 'https://picsum.photos/seed/qualifications/800/1000', href: '#qualifications' },
    { label: 'Projects', image: 'https://picsum.photos/seed/projects/800/1000', href: '#projects' },
    { label: 'Achievements', image: 'https://picsum.photos/seed/achievements/800/1000', href: '#achievements' },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
      setTimeout(() => {
        setPreviewVisible(false)
        setPreviewImg('')
      }, 500)
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemHover = (imageUrl: string) => {
    if (previewImg !== imageUrl) {
      setPreviewVisible(false)
      setTimeout(() => {
        setPreviewImg(imageUrl)
        setPreviewVisible(true)
      }, 200)
    }
  }

  const handleMenuItemLeave = () => {
    // Keep the last hovered image visible
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">Suman.Dev</div>
            <div 
              className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
              id="navToggle"
              onClick={toggleMenu}
            >
              <div className="nav-toggle-text">
                <span>Menu</span>
                <span>Close</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <nav className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} id="menuOverlay">
        <div className="menu-container">
          <ul className={`menu-links ${previewImg ? 'has-hover' : ''}`} id="menuLinks">
            {menuItems.map((item, index) => (
              <li 
                key={item.label}
                className="menu-link"
                onMouseEnter={() => handleMenuItemHover(item.image)}
                onMouseLeave={handleMenuItemLeave}
              >
                <a 
                  href={item.href} 
                  onClick={handleMenuClose}
                >
                  {item.label.split('').map((char, charIndex) => (
                    <span 
                      key={charIndex}
                      className="char"
                      style={{ 
                        transitionDelay: `${(index * 0.05) + (charIndex * 0.03)}s` 
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </a>
              </li>
            ))}
          </ul>
          <div className="preview-image-container">
            {previewImg && (
              <img 
                src={previewImg} 
                alt="Preview" 
                className={`preview-img ${previewVisible ? 'visible' : ''}`} 
                id="previewImg"
              />
            )}
          </div>
        </div>
      </nav>

      <style>{`
        :root {
          --secondary-color: #1e293b;
        }

        body.menu-open { 
          overflow: hidden; 
        }

        header { 
          background: rgba(255, 255, 255, 0.95); 
          backdrop-filter: blur(10px); 
          position: sticky; 
          top: 0; 
          z-index: 1000; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.05); 
        }

        .container { 
          max-width: 1100px; 
          margin: 0 auto; 
          padding: 0 20px; 
        }

        nav { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          height: 70px; 
        }

        .logo { 
          font-size: 1.5rem; 
          font-weight: 700; 
          color: var(--secondary-color); 
        }

        .nav-toggle {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.85rem;
          z-index: 2001;
          position: relative;
          padding: 10px 20px;
          border-radius: 50px;
          background: rgba(30,41,59,0.08);
          backdrop-filter: blur(8px);
          transition: background 0.3s ease, transform 0.3s ease;
          color: var(--secondary-color);
          border: 1px solid rgba(30,41,59,0.1);
        }

        .nav-toggle:hover { 
          background: rgba(30,41,59,0.15); 
        }

        .nav-toggle-text { 
          position: relative; 
          display: block; 
          height: 1.2em; 
          overflow: hidden; 
          width: 60px; 
          text-align: center; 
        }

        .nav-toggle-text span { 
          display: block; 
          transition: transform 0.5s cubic-bezier(0.76,0,0.24,1); 
        }

        .nav-toggle.active .nav-toggle-text span { 
          transform: translateY(-100%); 
        }

        .menu-overlay {
          position: fixed;
          top: 0; 
          left: 0;
          width: 100%; 
          height: 100vh;
          background-color: #050505;
          z-index: 2000;
          display: flex;
          transform: translateY(-100%);
          transition: transform 0.8s cubic-bezier(0.76,0,0.24,1);
          padding: 4rem;
        }

        .menu-overlay.active { 
          transform: translateY(0); 
        }

        .menu-container { 
          width: 100%; 
          height: 100%; 
          display: flex; 
          justify-content: space-between; 
          position: relative; 
        }

        .menu-links { 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          z-index: 2; 
          list-style: none; 
        }

        .menu-link { 
          display: block; 
          overflow: hidden; 
          cursor: pointer; 
          padding: 8px 0; 
          position: relative; 
        }

        .menu-link a {
          font-size: clamp(3rem, 5vw, 5.5rem);
          font-weight: 800;
          display: block;
          color: #555;
          transition: color 0.4s ease;
          line-height: 1.1;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          text-decoration: none;
        }

        .menu-links.has-hover .menu-link a { 
          color: #222; 
        }

        .menu-links.has-hover .menu-link:hover a { 
          color: #fff; 
        }

        .char {
          display: inline-block;
          transform: translateY(115%);
          transition: transform 0.6s cubic-bezier(0.76,0,0.24,1), opacity 0.6s ease;
          opacity: 0;
        }

        .menu-overlay.active .char { 
          transform: translateY(0); 
          opacity: 1; 
        }

        .menu-link:hover .char { 
          transform: translateY(-8%) !important; 
        }

        .preview-image-container {
          position: absolute;
          right: 0; 
          top: 50%;
          transform: translateY(-50%);
          width: 380px; 
          height: 520px;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .menu-overlay.active .preview-image-container { 
          opacity: 1; 
        }

        .preview-img {
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          border-radius: 8px;
          transform: scale(1.15);
          transition: transform 0.8s cubic-bezier(0.76,0,0.24,1), opacity 0.4s ease;
          opacity: 0;
        }

        .preview-img.visible { 
          opacity: 1; 
          transform: scale(1); 
        }

        @media (max-width: 768px) {
          .menu-overlay { 
            padding: 2rem; 
          }
          .menu-link a { 
            font-size: 12vw; 
          }
          .preview-image-container { 
            display: none; 
          }
        }
      `}</style>
    </>
  )
}

export default Header