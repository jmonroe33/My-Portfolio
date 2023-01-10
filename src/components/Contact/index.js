import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_u7ufzvz',
                'template_eqrls9z',
                refForm.current,
                'tfKKh29CVYT7gYQG6'
            )
            .then(() => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}

                        />
                    </h1>
                    <p> I am interested in any Full-Stack, Frontend, or Backend roles especially one's that involve teamwork.
                        If you have any questions, offers, or requests, please don't hesitate to contact me using the form below.
                    </p>
                    <div>
                        <form ref={refForm} onSubmit={sendEmail} className='contact-form'>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jaden Monroe,
                    <br/>
                    United States
                    <br/>
                    Palmdale CA, 93550
                    <br />
                   <span>jadenmonroe3@gmail.com</span> 
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[34.55563309244488, -118.07796127116467]} zoom={13}>
                       <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                       <Marker position={[34.55563309244488, -118.07796127116467]}>
                         <Popup>Jaden lives in this area, lets grab coffee sometime :) </Popup>
                       </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact