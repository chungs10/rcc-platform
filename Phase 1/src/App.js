import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Support from './pages/Support';
import Events from './pages/Events';
import Login from './pages/Login';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/support' element={<Support />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
