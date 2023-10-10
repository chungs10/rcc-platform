import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Support from './pages/Support';
import Options from './pages/Options';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/support' element={<Support />} />
          <Route path='/options' element={<Options />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
