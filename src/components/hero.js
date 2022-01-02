import * as React from "react"
import GeneralButton from './general-button'

const Hero = prop => {

  const contactClick = () => {
    console.log('set up contact form')
  }
  
  return (
    <div className='hero-wrapper' 
      style={{ backgroundImage: `url(${prop.backgroundImage})` }} >
      <div className='hero-content-wrapper'>
        <div className='hero-content-container'>
          <div className='hero-content'>
            <div className='hero-title'>{prop.title}</div>
            <div className='hero-body'>{prop.body}</div>
            <div className='hero-actions'>
              <GeneralButton category="button-primary" text="Contact Me" click={contactClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
