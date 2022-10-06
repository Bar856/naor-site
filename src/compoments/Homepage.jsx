import React from 'react'
import Introduction from './Introduction';
import About from './About';
import Changes from './Changes';
import Row from 'react-bootstrap/Row';
import Plan from './Plan';
import Contact from './Contact';
export default function Homepage(props) {
  return (
    <>
    <Row>
      <Introduction />
      <About />
      <Plan />
      <Changes />
      <Contact />
    </Row>
    </>
  )
}
