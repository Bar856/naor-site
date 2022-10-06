import React from 'react'
import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import pic1 from '../pics/logoNaor.png'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
export default function Introduction(props) {

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
 
  return (
    <div id="home" className='introContainer heightWidth'>
      <Row>
        <Col>
        <Image onClick={()=>openInNewTab(("https://pacman-react.netlify.app"))} className='imgInto' src={pic1} alt="Arcade" />
        </Col>
      </Row>
      <Row className='contactContainer margeSides'>
        <Col>
          <div onClick={()=>openInNewTab(("tel:972526611137"))} className='smallFont contactItem hoverMouse pinkBoarders'>
            {"השאר פרטים"}
          </div>
        </Col>
        <Col>
          <div onClick={()=>openInNewTab(("https://api.whatsapp.com/send?phone=972526611137"))} className='smallFont contactItem pinkBoarders hoverMouse'>
            {"שלח הודעה"}
          </div>
        </Col>
      </Row>
  </div>
  )
}
