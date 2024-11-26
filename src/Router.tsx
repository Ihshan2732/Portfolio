// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ContactForm from './components/Contact/ContactForm';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </Router>
);

export default AppRouter;
