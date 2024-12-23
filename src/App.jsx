import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import RenderPage from './pages/RanderPage'; // Import the RenderPage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default Route - Home Page */}
        <Route path="/" element={<Home />} />

        {/* Test Route - RenderPage */}
        <Route path="/test" element={<RenderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
