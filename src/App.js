import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
};

export default App;