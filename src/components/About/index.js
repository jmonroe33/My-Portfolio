import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect} from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faNode, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass]= useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ', 'm','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                    I'm An aspiring front-end developer born and raised in the LA area looking
                    for any role in an established IT company with the opportunity to work 
                    with the latest technologies on challenging and diverse projects.
                    </p>

                    <p>I'm quietly confident, constantly trying to improve my skills one design problem at a time.</p>
                    <p> 
                        If i had to describe myself in one sentence it would be a family oriented goofball
                        that loves to make music and watch tech videos. 
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faSquareJs} color="#EFD81D"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faNode} color="#215732"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
        
    )
}

export default About

