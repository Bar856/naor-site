import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import pic1 from '../pics/logoNaor.png'
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
        <Image className='imgInto' src={pic1} alt="logo" />
        </Col>
      </Row>
      <Row className='contactContainer margeSides'>
          <Col>
            <div onClick={()=>{window.location = '#contact'}} className='smallFont contactItem hoverMouse pinkBoarders '>
              {"השאר פרטים"}
            </div>
          </Col>
          <Col>
            <div onClick={()=>openInNewTab((" https://wa.me/972526810742?text=היי%20נאור,%20אני%20מעוניין%20להתחיל%20בתהליך!%20"))} className='smallFont contactItem pinkBoarders hoverMouse'>
              {"שלח הודעה"}
            </div>
          </Col>
      </Row>
  </div>
  )
}
