import React from 'react'
import About from './About'

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-item">
      <About />
    </div>

    <div className="footer-item">
      <h3>Enlaces</h3>

      <ul>
        <li>
          <i className="icon-twitter"></i> Twitter
        </li>
        <li>
          <i className="icon-github"></i> Github
        </li>
      </ul>
    </div>

    <div className="footer-item">
      <h3>Copyleft</h3>

      <p>
        <i className="icon-creative-commons"></i>{' '}
        <i className="icon-creative-commons-attribution"></i> Todos los contenidos de este sitio se
        liberan bajo licencia Creative Commons Atribución 4.0 Internacional.
      </p>
      <p>Los pictogramas Entypo son obra de Daniel Bruce — www.entypo.com.</p>
    </div>
  </footer>
)

export default Footer
