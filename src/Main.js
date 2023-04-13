import './App.css';
import About from './content/About';
import HeroSection from './content/HeroSection';
import Highlights from './content/Highlights';
import Testimonials from './content/Testimonials';

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