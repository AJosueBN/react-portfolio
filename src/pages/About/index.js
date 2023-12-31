// imported files/libraries
import React from 'react'
import "./style.css"
import Image from "../../assets/personal-image.jpg"

// Part that renders onto the page
function About() {
    return (
        <section className='about'>
        <h1>About</h1>
        <div className="about-container">
        <h2>My Name is Josue</h2>
      <div class="summary"> 
        <p>Aspiring software developer that's eager to craft on my skills and gain further experience</p>
        <p>I'm someone that is always looking to explore and adapt to new things in an environment that is always dynamically changing </p>
        <p>Can browse across this webpage for my projects, resume and can reach out via the contact section</p>
      </div>
        <img src={Image} alt="personal image" />
        </div>
        </section>
    )
}

export default About