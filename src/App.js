import './App.css';
import Projects from './Projects/projects';
import Navbar from './Navbars/Navbar';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Experience from './Experience/experience';


function App() {
  return (
    <div >
    <div >
      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
    <div>
     
    </div>
    </div>
  );
}

export default App;