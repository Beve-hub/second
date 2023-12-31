import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Features/LandingPage';
import Board from './Dash/Board';
import Company from './Dash/Company';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/landingPage' exact element={<LandingPage />} />
          <Route path='/' element={<Board/>} />
          <Route path='/company' element={<Company />} />
        </Routes>
    </Router>
  );
};

export default App;
