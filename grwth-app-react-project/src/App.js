import './styles.css';
import { Navbar } from './components/Navbar-component';
import { Hero } from './components/Hero-component';
import { Video } from './components/Video-component';
import { Testimonial } from './components/Testimonial-component';
import { Pricing } from './components/Pricing-component';
import { Faq } from './components/Faq-component';

const faqs = [
  {
    title: "How Does the contact management feature help me keep track of clients and partners?",
    text: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics"
  },
  {
    title: "How Does the contact management feature help me keep track of clients and partners?",
    text: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics"
  },
  {
    title: "How Does the contact management feature help me keep track of clients and partners?",
    text: "Keep track of your contacts, gain valuable insights, analyse live data and performance metrics"
  }
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Video />
      <Testimonial />
      <Pricing />
      <Faq faqs={faqs} />
    </div>
  );
}

export default App;
