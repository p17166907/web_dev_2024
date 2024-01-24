import './styles.css';
import { Navbar } from './components/Navbar-component';
import { Hero } from './components/Hero-component';
import { Video } from './components/Video-component';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Video />
    </div>
  );
}

export default App;
