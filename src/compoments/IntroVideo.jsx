import React from 'react'
import naorVid from '../pics/naorslideshow.mp4'
import arrowGif from '../pics/arrow-gif.gif'
export default function IntroVideo(props) {

  return (
      <div onClick={()=>{window.location = ("#about")}} id="home" className='video-container'>
        <video className='introVid' loop
            muted
            autoPlay
            playsInline>
          <source src={naorVid} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className="caption">
          <img className='gifarrow' src={arrowGif} alt="" />
        </div>
      </div>
  )
}
