import React from 'react'
import "./style.css"

function Header() {

  const handlePageChange = () => {
    console.log("working")
  }

  return (
    <header>
        <h1>Josue B-N</h1>
        <nav>
          <ul>
          <li onClick={handlePageChange}>About</li>
          <li onClick={handlePageChange}>Portfolio</li>
          <li onClick={handlePageChange}>Resume</li>
          <li onClick={handlePageChange}>Contact</li>
          </ul>
        </nav>

    </header>
  )
}

export default Header