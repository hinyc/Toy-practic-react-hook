import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
