import './index.scss'
import logoJ from '../../assets/images/cJ.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap-trial'

const Logo = () => {
    const solidLogoRef = useRef()
    const bgRef = useRef()

    useEffect(() => {
       gsap.fromTo(
        solidLogoRef.current,
        {
            opacity:0,
        },
        {
            opacity: .8,
            delay: 3,
            duration: 3,
        }
       ) 
    },[])
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={logoJ} alt='j'/>
        </div>
    )
}

export default Logo