import { useState, useEffect } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import weLoveMovies from "../../assets/images/we-love-movies.png"
import reservation from "../../assets/images/Reservations.png"
import flashcard from "../../assets/images/Flashcard.png"





const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const projectData = [
        {
            title:"We Love Movies App",
            body:"Knex, Postgres, Node, Express Js ",
            url:weLoveMovies,
            link:"https://we-love-movies-frontend-pno8.onrender.com",
            btn:"Movies-app"
        }, 
         {
            title:"Flash-card-app",
            body:"HTML, CSS, React",
            url: flashcard,
            link:"https://github.com/jmonroe33/Flash-Card-App",
            btn:"Flashcard-app"
        },  
        {
            title:"Reservations-App",
            body:"Knex, Postgres, React, Node.Js",
            url:reservation,
            link:"https://restraurant-reservation-front-end.onrender.com/dashboard",
            btn: "Reservations-app",
        },
    ];

    const projectLayout = projectData.map((project, index) => (
       
        <div className='card' key={index}>
            <div className="image-container">
                <img className="card-img-top" src={project.url} alt="Card image cap"/>
            </div>
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{project.title}</h5>
                        </div>
                        <p className="card-text">{project.body}</p>
                        <a href={project.link} className="btn">{project.btn}</a>
                    </div> 
            
        </div>
        
    ))

    return (
        <>
         <div>
            <div className="header-container">
                <div className='my-portfolio'>
                    <h1>
                        <span className={letterClass}>M</span>
                        <span className={`${letterClass} _12`}>y</span>
                        <span> </span>
                        <span className={`${letterClass} _13`}>p</span>
                        <span className={`${letterClass} _14`}>o</span>
                        <span className={`${letterClass} _15`}>r</span>
                        <span className={`${letterClass} _16`}>t</span>
                        <span className={`${letterClass} _17`}>f</span>
                        <span className={`${letterClass} _18`}>o</span>
                        <span className={`${letterClass} _19`}>l</span>
                        <span className={`${letterClass} _20`}>i</span>
                        <span className={`${letterClass} _21`}>o</span>
                    </h1>
                </div>
            </div>
            <div className='card-container'>
                {projectLayout}
            </div>

        </div>
        <Loader type='pacman'/>
        </>
       
    )
}

export default Projects