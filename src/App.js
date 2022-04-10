import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import { Stack, Divider, Typography } from "@mui/material";


function App() {
  return (
    <Stack spacing={4} direction="column">
      <NavBar/>
      <Divider textAlign="center" variant="inset"><Typography variant="h3" id="about">About</Typography></Divider>
      <AboutSection/>
      <Divider textAlign="center" ><Typography variant="h3" id="projects">Projects</Typography></Divider>
      <ProjectSection/>
      <Divider textAlign="center"><Typography variant="h3" id="contact">Contact</Typography></Divider>
      <ContactSection/>
    </Stack>
  );
}

export default App;
