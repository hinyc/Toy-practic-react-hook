import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UseMemo1 from './components/UseMemo1';
import UseCallback from './pages/UseCallback';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UseMemo1 />} />
        <Route path="/useCallback" element={<UseCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
