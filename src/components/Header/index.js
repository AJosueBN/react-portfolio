import React from 'react'
import "./style.css"
import {useContext} from "react"
import {AppContext} from "../../App"

function Header() {
  const {currentPage, setCurrentPage} = useContext(AppContext)
  
  const handlePageChange = (event) => {
    const clicked = event.target.innerHTML;
    setCurrentPage(clicked)
  }

  return (
    <header>
        <h1>A Josue</h1>
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