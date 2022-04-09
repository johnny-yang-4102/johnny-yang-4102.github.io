import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { Stack, Divider } from "@mui/material";

function App() {
  return (
    <Stack spacing={2} direction="column">
      <NavBar/>
      <Divider textAlign="center" sx={{ borderBottomWidth: 5 }}>ABOUT</Divider>
      <AboutSection/>
      <Divider textAlign="center" >PROJECTS</Divider>
      <ProjectSection/>
    </Stack>
  );
}

export default App;
