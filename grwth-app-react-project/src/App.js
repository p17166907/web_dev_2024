import './styles.css';
import { Navbar } from './components/Navbar-component';
import { Hero } from './components/Hero-component';
import { Video } from './components/Video-component';
import { Testimonial } from './components/Testimonial-component';
import { Pricing } from './components/Pricing-component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Video />
      <Testimonial />
      <Pricing />
    </div>
  );
}

export default App;
