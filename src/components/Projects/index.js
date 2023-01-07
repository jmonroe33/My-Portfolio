import { useState, useEffect } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import weLoveMovies from "../../assets/images/we-love-movies.png"
import reservation from "../../assets/images/Reservations.png"
import flashcard from "../../assets/images/Flashcard.png"
import jsIcon from "../../assets/images/logo3.png"




const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const projectData = [
        {
            tite:"We Love Movies App",
            body:"Html, Bootstrap, Javascript ",
            url:weLoveMovies,
        }, 
         {
            tite:"Flash-card-app",
            body:"asdfasdaf",
            url: flashcard,
            icon: jsIcon,
        },  
        {
            tite:"Flash-card-app",
            body:"asdfasdaf",
            url:reservation,
        },
    ];

    const projectLayout = projectData.map((project, index) => (
       
        <div className='card-container' key={index}>
            <div className="image-container">
                <img className="card-img-top" src={project.url} alt="Card image cap"/>
            </div>
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{project.title}</h5>
                        </div>
                        <p className="card-text">{project.body}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
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
            <div className='jeff'>
                {projectLayout}
            </div>

        </div>
        <Loader type='pacman'/>
        </>
       
    )
}

export default Projects