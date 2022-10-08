import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Homepage from './compoments/Homepage';
import MyNavabr from './compoments/MyNavabr';
import './css/App.scss';
import './fonts/OldNewspaperTypes/OldNewspaperTypes.ttf'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import IntroVideo from './compoments/IntroVideo';

function App() {
  return (
    <>
      <div className="App">
          <MyNavabr />
          <IntroVideo/>
        <Container style={{'textAlign':'center'}}>
          <Router>
              <Routes> 
                {/* change the path! */}
                <Route path={'/naor-site'} element={<Homepage/>}/>
              </Routes>
          </Router>
        </Container >
      </div>
    </>
      
  );
}

export default App;