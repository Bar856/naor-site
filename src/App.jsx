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

function App() {
  return (
    <div className="App">
      <MyNavabr />
      <Router>
        <Container fluid>
          <Routes> 
            {/* change the path! */}
            <Route path={'/naor-site'} element={<Homepage/>}/>
          </Routes>
        </Container >
      </Router>
    </div>
  );
}

export default App;