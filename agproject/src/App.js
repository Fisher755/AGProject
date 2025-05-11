import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className='App' >
      <Header></Header>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <GallerySection></GallerySection>
      <ContactSection></ContactSection>
    </div>

  )}
export default App;
