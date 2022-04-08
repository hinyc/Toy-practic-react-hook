import { Container, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';
import UseState from './pages/UseState';
import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container fixed>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/useCallback" element={<UseCallback />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
