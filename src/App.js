import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { Stack, Divider } from "@mui/material";

function App() {
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />} direction="column">
      <NavBar/>
      <AboutSection/>
      <ProjectSection/>
    </Stack>
  );
}

export default App;
