import React from 'react'
import Introduction from './Introduction';
import About from './About';
import Changes from './Changes';
import Plan from './Plan';
import Contact from './Contact';
export default function Homepage(props) {
  return (
    <div id='about'>
      <Introduction />
      <About />
      <Plan />
      <Changes />
      <Contact />
    </div>
  )
}
