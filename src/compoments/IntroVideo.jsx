import React from 'react'
import naorVid from '../pics/naorslideshow.mp4'
import arrowGif from '../pics/arrow-gif.gif'
import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
export default function IntroVideo(props) {

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () =>{
    setIsVideoLoaded(true)
  }
  return (
      <div onClick={()=>{window.location = ("#about")}} id="home" className='video-container'>
        <Row>
          {!isVideoLoaded ? <p className='center fontColor smallFont'>Loading.......</p>:  ""}
        </Row>
        <video className='introVid' onLoadedData={onLoadedData}
            loop
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
