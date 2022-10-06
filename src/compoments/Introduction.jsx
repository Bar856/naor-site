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
        <Image className='imgInto' src={pic1} alt="Arcade" />
        </Col>
      </Row>
      <Row className='contactContainer margeSides'>
        <Col>
          <div onClick={()=>openInNewTab(("tel:972526611137"))} className='smallFont contactItem hoverMouse pinkBoarders '>
            {"השאר פרטים"}
          </div>
        </Col>
        <Col>
          <div onClick={()=>openInNewTab(("https://api.whatsapp.com/send?phone=972526810742"))} className='smallFont contactItem pinkBoarders hoverMouse'>
            {"שלח הודעה"}
          </div>
        </Col>
      </Row>
  </div>
  )
}
