import React, { useState, useEffect } from 'react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 660

      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <>
      <div data-scrolled={scrolled} className="container mx-auto navigation-container">
        <nav className="navigation">
          <ul>
            <li>
              <button>Reciente</button>
            </li>
            <li>
              <button>Archivo</button>
            </li>
            <li>
              <button>Acerca de</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
