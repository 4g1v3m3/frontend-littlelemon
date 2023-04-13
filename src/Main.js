import { Routes, Route } from 'react-router';
import './App.css';
import HeroSection from './content/HeroSection';
import Highlights from './content/Highlights';
import Testimonials from './content/Testimonials';
import About from './content/About';


const Main = () => {
  return (
    <div className='Main'>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  )
}

export default Main