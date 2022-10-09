import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import igIcon from '../pics/igIcon.png'
import naorIconBlack from '../pics/naorIconBlack.png'
import whatsappLogo from '../pics/whatsappLogo.png'
export default function MyNavabr() {
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <Navbar className='navBar' collapseOnSelect={true} sticky="top" fixed='top' id="navbar navbarCont sticky" bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Text className='white' href="#home">
          {/* <a> */}
            <img onClick={()=>openInNewTab((" https://wa.me/972526810742?text=היי%20נאור,%20אני%20מעוניין%20להתחיל%20בתהליך!%20"))} className='iconNav hoverMouse' src={whatsappLogo} alt="" />
          {/* </a> */}
          <a href='#home'>
          <img className='iconNav hoverMouse' src={naorIconBlack} alt="logo"/>
          </a>
            <img onClick={()=>openInNewTab('https://www.instagram.com/naor__mfitness/')} className='iconNav hoverMouse' src={igIcon} alt=""/></Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=' smallFont white' href="#home">בית</Nav.Link>
            <Nav.Link className='white smallFont' href="#about">על עצמי</Nav.Link>
            <Nav.Link className=' white smallFont' href="#plans">תוכניות</Nav.Link>
            <Nav.Link className=' white smallFont' href="#changes">תוצאות</Nav.Link>
            <Nav.Link className=' white smallFont' href="#contact">צור קשר</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}




