import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navigation">
    <div className="logotype-container">
      <Link href="/">
        <span className="logotype">
          <span>lex</span>
          <span>lib</span>
        </span>
      </Link>
    </div>
    <div className="social-container">
      <ul>
        <li>
          <a href="https://github.com/eddmat/lexlib" title="Repositorio en Github" target="_blank">
            <i className="icon-github"></i> <span>eddmat/lexlib</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/upthecomputers" title="Perfil en Twitter" target="_blank">
            <i className="icon-twitter"></i> <span>@upthecomputers</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
