import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container xl={12}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Home />
      </Grid>
      <Grid item xs={12}>
        <Services />
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <Testimonials />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
}

export default App;
