import React from "react"
import { Link, Typography, Avatar } from "@mui/material"
import Resume from "./../Resume.pdf"
import Pic from "./../profile.jpg"
import './components.css'

const AboutSection = () => {
  return (
    <div className="about-section">

      <Avatar alt="Johnny Yang" src={Pic} sx={{ width: 256, height: 256 }}/>
      <Typography variant="h4">
        Hi I'm Johnny Yang,
      </Typography>
      <Typography variant="body1">
        an aspiring software engineer with a focus in full-stack development.
        I've professionally worked on a diverse range of experiences including mapping out invasive species in Nepal,
        building out a back-end for a cyber-security training company, and more.
      </Typography>

      <Typography variant="body1">
        When I'm not coding, you'll find me working out, reading up on history/business, and hanging out with friends.
      </Typography>

      <Typography variant="body1">
        See my resume <Link href={Resume}>here</Link>
      </Typography>

      <Typography variant="body1">
        Check out my work below!
      </Typography>

    </div>
  )
}

export default AboutSection