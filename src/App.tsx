import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UseMemo1 from './components/UseMemo1';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UseMemo1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
