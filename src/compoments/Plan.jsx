import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import motivationVid from '../pics/motivationVid.mp4';
import group1 from '../pics/group1.jpeg'
import group2 from '../pics/group2.jpeg'
import Col from 'react-bootstrap/esm/Col';
export default function Plan() {
  return (
    <div id="plans" className='aboutCont black'>
      <Row>
        <h4 className='fontColor'>התכניות שלנו</h4>
      </Row>
      <Row>
        <video className='motivationVid' loop
            controls
            autoPlay
            muted
            playsInline>
          <source src={motivationVid} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </Row>
      <Row className='plansCont'>
        <h4  className='fontColor'>🚩 הכנה לתחרויות<br></br></h4 >
        <p className='fontColor smallFont' style={{'direction':'rtl','textAlign':'right'}}>
        
        • שיעורי פוזינג <br></br>
        • תזונה <br></br>
        • פגישות יעוץ פרונטליות<br></br>
        • ליווי און ליין 24/7<br></br>
        • תוכנית אימונים<br></br>
        • אימון השתלמות איתי בחדר הכושר לשיפור ביצועים<br></br>
        • ליווי שלי עד לרגע הבמה🏆<br></br>
        </p>
        <h4  className='fontColor'>דרישות<br></br></h4 >
        <p className='fontColor smallFont' style={{'direction':'rtl','textAlign':'right'}}>
          • מינימום ניסיון שנה וחצי בחדר הכושר<br></br>
          • ראיון אישי לפני התחלת התהליך<br></br>
        </p>
      </Row>
      <Row className='plansCont'>
        <h4  className='fontColor'>ליווי אונליין<br></br></h4 >
        <p className='fontColor smallFont' style={{'direction':'rtl','textAlign':'right'}}>
          • שיטות אימון חדשניות ע״פ מחקרים<br></br>
          • פגישות ייעוץ הכוללות שקילות ולקיחת מדדים<br></br>
          • תפריט תזונה מתוחזק בהתאם להתקדמות<br></br>
          • ליווי שלי 24/7 לשאלות ופניות<br></br>
          • תוכנית אימון מותאמת ומשתנה בהתאם לפרופורציות הנדרשות<br></br>
        </p>
      </Row>
      <Row className='plansCont'>
        <h4  className='fontColor'>אימון השתלמות בחדר כושר<br></br></h4 >
        <p className='fontColor smallFont' style={{'direction':'rtl','textAlign':'right'}}>
        קבלו את מוצר הפרימיום של הנבחרת שלי 🚩<br></br>
        • שיטות עבודה חדשניות<br></br>
        • חילוק שרירים בצורה נכונה ואפקטיבית<br></br>
        • שיפור עצימות האימון<br></br>
        • אתם הולכים לדעת את השיטות שלי ולנהל את עצמכם בעתיד<br></br>
        • לדעת לחלק את הכוח בצורה נכונה<br></br>
        • לדעת להגיע לכשל מאסיבי וממוקד<br></br>
        • קבלת החלטות נכונות תוך כדי האימון<br></br>
        ועוד ים ידע שאני הולך להעביר אליכם!<br></br>

        מלמד אתכם את כל סודות המקצוע והופך אתכם למקצוענים!<br></br>
        </p>
        <p className='center fontColor smallFont'>(מספר מקומות מוגבל)</p>
      </Row>
      <Row className='plansCont'>
        <p className='fontColor smallFont' style={{'direction':'rtl'}}>
           כחלק מהצטרפות לאחת התוכניות תוצרפו לקבוצת הווצאפ הבלעדית של NMTeam לעדכונים ולהעלאת המוטיבציה!<br></br>
          טעימה מהקבוצה שלנו - <br></br>
        </p>
        <Col>
          <img className='imgWhatsapp' src={group1} alt="whatsapp group img1" />
        </Col>
        <Col>
          <img className='imgWhatsapp' src={group2} alt="whatsapp group img2" />
        </Col>
      </Row>
  </div>
  )
}
