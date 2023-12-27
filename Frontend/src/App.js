import "./App.css";
import Navbar from "./Navbars/Navbar";
import Home from "./Home/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loggin from "./Login/Loggin";
import Projects from "./Projects/projects";
import Experience from "./Experience/experience";
import Contact from "./Contact/contact";
import About from "./About/about";
import Admin from "./Admin/Admin";
// import Form from "./NForm";
import NForm from "./NForm";

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
            <Route path="/admin1" element={<Admin />} />
            <Route path="/form" element={<NForm />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div></div>
    </div>
  );
}

export default App;
