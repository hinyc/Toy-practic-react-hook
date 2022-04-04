import React, { useContext, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';
import UseState from './pages/UseState';

function App() {
  const memoTrue = useMemo(() => true, []);
  const memoFalse = useMemo(() => false, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/useState" element={<UseState />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
