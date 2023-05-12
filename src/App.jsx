import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Commitment from "./components/Commitment";
import ResidentialProjects from "./components/lists/ResidentialProjects";
import CommercialProjects from "./components/lists/CommercialProjects";
import RetailProjects from "./components/lists/RetailProjects";

import Testimonials from "./components/Testimonials";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <Services />
      <Projects />
      <Testimonials />

      {/* <Contact /> */}
    </BrowserRouter>
  );
}

export default App;
