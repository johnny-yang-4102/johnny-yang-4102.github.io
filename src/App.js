import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import { Stack, Divider, Typography, Grid } from "@mui/material";


function App() {
  return (
    <Stack spacing={4} direction="column">
      <NavBar />

      <Grid item>
        <Divider textAlign="center" variant="inset"><Typography variant="h3" id="about">About</Typography></Divider>
      </Grid>

      <AboutSection />

      <Grid item>
        <Divider textAlign="center" ><Typography variant="h3" id="projects">Projects</Typography></Divider>
      </Grid>
      <ProjectSection />

      <Grid item>
        <Divider textAlign="center"><Typography variant="h3" id="contact">Contact</Typography></Divider>
      </Grid>
      
      <ContactSection />
    </Stack>
  );
}

export default App;
