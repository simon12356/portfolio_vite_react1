import { useState, useEffect, useRef, useCallback } from 'react'

function Footer() {
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const toastTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const gridElement = gridRef.current
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    if (gridElement) {
      observer.observe(gridElement)
    }

    return () => {
      if (gridElement) {
        observer.unobserve(gridElement)
      }
    }
  }, [])

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }

    setToastMessage('copied')
    setToastVisible(true)
    
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current)
    }
    
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastVisible(false)
    }, 1600)
  }, [])

  const openLinkedIn = useCallback(() => {
    window.open('https://www.linkedin.com/in/suman-maity-730519347/', '_blank', 'noopener,noreferrer')
  }, [])

  const openGitHub = useCallback(() => {
    window.open('https://github.com/simon12356', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <>
      <footer id="contact">
        <div className="inner">
          <div className="top">
            <div className="label-contact">CONTACT</div>
            <h1 className="headline">HELPS US TO NEVER ACHIEVE INBOX ZERO. BECAUSE WHO DOESN'T LIKE E-MAILS, RIGHT? RIGHT?!</h1>
          </div>

          <div className="divider">
            <div className="dot"></div>
          </div>

          <div 
            ref={gridRef}
            className={`contact-grid ${isVisible ? 'visible' : ''}`}
          >
            <div className="left">
              <div className="contact-row">
                <div className="row-label">NEW BUSINESS</div>
                <button 
                  className="email" 
                  onClick={() => copyToClipboard('sumanmaity721645@gmail.com')}
                >
                  sumanmaity721645@gmail.com
                </button>
              </div>
              <div className="contact-row">
                <div className="row-label">GENERAL</div>
                <button 
                  className="email" 
                  onClick={() => copyToClipboard('4222suman@gmail.com')}
                >
                  4222suman@gmail.com
                </button>
              </div>
            </div>

            <div className="right">
              <div className="social-label">SOCIAL</div>
              <div className="social-pills">
                <button 
                  className="pill" 
                  onClick={openLinkedIn}
                  aria-label="Open LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                  LinkedIn
                </button>
                <button 
                  className="pill" 
                  onClick={openGitHub}
                  aria-label="Open GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.02c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.815 1.104.815 2.226v3.3c0 .32.216.694.825.576C20.565 22.295 24 17.797 24 12.5 24 5.87 18.63.5 12 .5Z"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="toast" className={toastVisible ? 'show' : ''}>
        {toastMessage}
      </div>

      <style>{`
        footer {
          background: #0f0f0f;
          color: #fff;
          width: 100%;
          padding: clamp(5rem, 12vw, 9rem) 0 clamp(4rem, 9vw, 7rem);
          position: relative;
          overflow: hidden;
        }

        .inner {
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
        }

        .top {
          padding: 0 5vw;
          margin-bottom: 8vh;
        }

        .label-contact {
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1;
          margin: 0 0 2.2rem 0;
          letter-spacing: -0.01em;
        }

        .headline {
          font-size: clamp(2.5rem, 6vw, 6.5rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.92;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 1500px;
          word-spacing: 0.02em;
        }

        .divider {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 clamp(4rem, 8vw, 7rem) 0;
          width: 100%;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
          opacity: 0.9;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 4rem;
          max-width: 1400px;
          padding: 0 5vw;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .left {
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
        }

        .contact-row {
          display: flex;
          align-items: baseline;
          gap: 2rem;
        }

        .row-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          opacity: 0.65;
          letter-spacing: 0.06em;
          width: 110px;
          flex-shrink: 0;
          font-weight: 500;
          line-height: 1.2;
          padding-top: 0.4rem;
        }

        .email {
          font-size: clamp(1.4rem, 2.8vw, 2.6rem);
          font-weight: 400;
          color: #fff;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          position: relative;
          text-align: left;
          font-family: inherit;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .email::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 1.5px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .email:hover::after,
        .email:focus-visible::after {
          transform: scaleX(1);
        }

        .email:focus-visible {
          outline: none;
          opacity: 0.8;
        }

        .right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 0.4rem;
        }

        .social-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          opacity: 0.65;
          letter-spacing: 0.06em;
          margin-bottom: 1.4rem;
          font-weight: 500;
          width: 110px;
        }

        .social-pills {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .pill {
          background: #1c1c1c;
          color: #fff;
          padding: 0.7rem 1.4rem;
          border-radius: 999px;
          border: 1px solid #2a2a2a;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          font-family: inherit;
          letter-spacing: 0.01em;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pill:hover {
          transform: translateY(-2px);
          background: #262626;
          border-color: #333;
        }

        .pill:active {
          transform: translateY(0);
        }

        .pill:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }

        .pill svg {
          width: 16px;
          height: 16px;
          opacity: 0.9;
        }

        #toast {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          background: #fff;
          color: #0f0f0f;
          padding: 0.65rem 1.25rem;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 9999;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        #toast.show {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }

          .contact-row {
            flex-direction: column;
            gap: 0.6rem;
            align-items: flex-start;
          }

          .row-label {
            width: auto;
            padding-top: 0;
            font-size: 0.8rem;
          }

          .social-label {
            width: auto;
            margin-bottom: 1rem;
            font-size: 0.8rem;
          }

          .right {
            padding-top: 0;
          }

          .left {
            gap: 2.2rem;
          }
        }

        @media (max-width: 600px) {
          .top {
            margin-bottom: 6vh;
          }
          
          .headline {
            line-height: 0.96;
            letter-spacing: -0.015em;
          }

          .email::after {
            bottom: -4px;
          }
        }
      `}</style>
    </>
  )
}

export default Footer