import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import igIcon from '../pics/igIcon.png'
import naorIconBlack from '../pics/naorIconBlack.png'
export default function MyNavabr() {
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <Navbar className='navBar' collapseOnSelect={true} sticky="top" fixed='top' id="navbar navbarCont sticky" bg="dark" expand="xl">
    <Container >
      <Navbar.Text className='white' href="#home"><img className='iconNav hoverMouse' src={naorIconBlack} alt=""/>  <img onClick={()=>openInNewTab('https://www.instagram.com/naor__mfitness/')} className='iconNav hoverMouse' src={igIcon} alt=""/></Navbar.Text>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className=' smallFont white' href="#home">Home</Nav.Link>
          <Nav.Link className='white smallFont' href="#about">About</Nav.Link>
          <Nav.Link className=' white smallFont' href="#djs">Djs</Nav.Link>
          <Nav.Link className=' white smallFont' href="#contact">Contact</Nav.Link>
          <Nav.Link className=' white smallFont' href="#sets">Our Music</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}



