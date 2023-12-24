import "./App.css";
import Navbar from "./Navbars/Navbar";
import Home from "./Home/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loggin from "./Login/Loggin";
import Projects from "./Projects/projects";
import Experience from "./Experience/experience";
import Contact from "./Contact/contact";
import About from "./About/about";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Projects />
                  <Experience />
                  <Contact />
                </>
              }
            />

            <Route path="/admin" element={<Loggin />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div></div>
    </div>
  );
}

export default App;
