// imported libraries
import React from 'react'
import "./style.css"
import {useContext} from "react"
import {AppContext} from "../../App"

// allows to return certain value of 'setCurrentPage' within the context and is used on app
function Header() {
  const {currentPage, setCurrentPage} = useContext(AppContext)
  
  // helps change the page depending on clicked section
  const handlePageChange = (event) => {
    const clicked = event.target.innerHTML;
    setCurrentPage(clicked)
  }
   // Part that renders onto the page
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