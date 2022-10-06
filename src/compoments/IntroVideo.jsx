import React from 'react'
import naorVid from '../pics/naorslideshow.mp4'
import arrowGif from '../pics/arrow-gif.gif'
export default function IntroVideo(props) {

  return (
    <div fluid id="home" className='video-container'>
      <video loop
          muted
          autoPlay
          playsInline>
        <source src={naorVid} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div class="caption">
        <img className='gifarrow' src={arrowGif} alt="" />
      </div>
  </div>
  )
}
