import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import motivationVid from '../pics/motivationVid.mp4'
export default function Plan() {
  return (
    <div id="about" className='aboutCont black'>
      <Row>
        <h4 className='fontColor'>התכניות שלנו</h4>
      </Row>
      <Row>
        <video className='motivationVid' loop
            muted
            autoPlay
            playsInline>
          <source src={motivationVid} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </Row>
      <Row className='plansCont'>
        <p className='fontColor smallFont' style={{'direction':'rtl'}}>
        <h3 className='fontColor'>🚩 הכנה לתחרויות<br></br></h3>
        
        • שיעורי פוזינג <br></br>
        • תזונה <br></br>
        • פגישות יעוץ פרונטליות<br></br>
        • ליווי און ליין 24/7<br></br>
        • תוכנית אימונים<br></br>
        • אימון השתלמות איתי בחדר הכושר לשיפור ביצועים<br></br>
        • ליווי שלי עד לרגע הבמה🏆<br></br>
        </p>
        <h3 className='fontColor'>דרישות:<br></br></h3>
        <p className='fontColor smallFont' style={{'direction':'rtl'}}>
          • מינימום ניסיון שנה וחצי בחדר הכושר<br></br>
          • ראיון אישי לפני התחלת התהליך<br></br>
        </p>
      </Row>
      <Row className='plansCont'>
        <h3 className='fontColor'>ליווי אונליין<br></br></h3>
        <p className='fontColor smallFont' style={{'direction':'rtl'}}>
          • שיטות אימון חדשניות ע״פ מחקרים<br></br>
          • פגישות ייעוץ הכוללות שקילות ולקיחת מדדים<br></br>
          • תפריט תזונה מתוחזק בהתאם להתקדמות<br></br>
          • ליווי שלי 24/7 לשאלות ופניות<br></br>
          • תוכנית אימון מותאמת ומשתנה בהתאם לפרופורציות הנדרשות<br></br>
        </p>
      </Row>
      <Row className='plansCont'>
        <h3 className='fontColor'>אימון השתלמות בחדר כושר<br></br></h3>
        <p className='fontColor smallFont' style={{'direction':'rtl'}}>
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
        (מספר מקומות מוגבל)
        </p>
      </Row>

      <Row>
        <p className='fontColor smallFont' style={{'direction':'rtl'}}>
          * כחלק מהצטרפות לאחת התוכניות תוצרפו לקבוצת הווצאפ הבלעדית של NMTeam לעדכונים ולהעלאת המוטיבציה!<br></br>
          <br></br>
          הקבוצה שלנו כוללת מתאמנים שמתכוננים לתחרויות בארץ ומתאמני חדר כושר רגילים שמעשירים את הידע שלהם מהתוכן שנשלח בקבוצה.<br></br>
          בנוסף מעלים אחת לשני את המוטיבציה,מצלמים אימונים,סרטוני ביצועים לשיפור טכניקה ועוד…
        </p>
      </Row>
  </div>
  )
}
