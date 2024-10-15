import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Family from './pages/Family/Family';
import Header from './components/Header/Header';
import NotFound from './components/404/NotFound';
import LeftSideMenu from './components/LeftSideMenu/LeftSideMenu';
import './App.css'; // Import custom styles
import RightSideMenu from './components/RightSideMenu/RightSideMenu';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-layout">
        <LeftSideMenu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/family" element={<Family />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="events-container">
            <RightSideMenu />
        </div>
      </div>
    </Router>
  );
}

export default App;
