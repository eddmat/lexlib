import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navigation">
    <Link href="/">
      <span className="logotype">
        <span>lex</span>
        <span>lib</span>
      </span>
    </Link>
  </nav>
)

export default Nav
