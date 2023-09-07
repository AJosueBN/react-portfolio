// imported files/libraries
import React from 'react'
import "./style.css"
import portfolio from "./portfolio.json"

function Portfolio() {
    // Part that renders onto the page
    return (
        <section className='portfolio'>
            <h1>Portfolio</h1>
            <div className='portfolio-container'>
                {portfolio.map((data) => {
                    return (
                        <div className="card" key={data.title}>
                            <img src={data.image} alt={data.title} />
                            <h3>{data.title}</h3>
                            <div>
                                <a href={data.github}><button className='repo-btn'>Repo</button></a>
                                <a href={data.live}><button className='live-btn'>Live</button></a>
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio