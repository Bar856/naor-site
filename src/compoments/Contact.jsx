import React from 'react'
import { send } from 'emailjs-com';
import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row'
export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_phone: '',
    from_email: '',
    message: '',
  });
  

  const onSubmit = (e) => {
    e.preventDefault();
      send('default_service', 'template_w8tczab', toSend, 'd5RVtZiMEsZJiPvN_')
      .then(function(response) {
        alert("הטופס נשלח בהצלחה!");
        document.getElementById("contactForm").reset();
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        alert("אירעה שגיאה בלתי צפויה, נסה שוב מאוחר יותר")
        console.log('FAILED...', error);
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className='aboutCont'>
      <Row >
        <h4 className='center'>צור קשר</h4>
      </Row>
      <form onSubmit={onSubmit} id="contactForm">
          <Row >
            <input required onChange={handleChange} maxLength={15} className='formItem smallFont' type="text" placeholder='שם' name="from_name" />
          </Row>
          <Row >
            <input required onChange={handleChange} maxLength={10} className='formItem smallFont' type="text" placeholder='מספר פלאפון' name="from_phone" />
          </Row>
          <Row >
            <input required onChange={handleChange} maxLength={40} style={{'direction':'ltr'}} className='formItem smallFont' type="text" placeholder='מייל' name="from_email" />
          </Row>
          <Row >
            <textarea required onChange={handleChange} className='text-flow formItem smallFont' type="text" placeholder='הודעה' name="message"/>
          </Row>
          <Row >
            <input required className='submitBtn formItem rowWidth smallFont' style={{'textAlign':'center'}} type="submit" value="שלח"/>
          </Row>
      </form>
  </div>
  )
}
