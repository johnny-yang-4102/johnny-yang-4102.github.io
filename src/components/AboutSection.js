import React from "react"
import { Link, Typography, Avatar, Grid } from "@mui/material"
import Resume from "./../Resume.pdf"
import Pic from "./../profile.jpg"
import './components.css'

const AboutSection = () => {
  return (
    <Grid container spacing={8}   justifyContent="center" >

      <Grid item xs="auto">
        <Avatar alt="Johnny Yang" src={Pic} sx={{ width: 256, height: 256 }} />
      </Grid>

      <Grid item xs={12} sm={5} >
        <Typography variant="h4">
          Hi I'm Johnny Yang,
        </Typography>

        <Typography variant="h4">
          an aspiring full-stack software engineer.
        </Typography>
        <Typography variant="body1" className="spacing">
          I've professionally worked on a diverse range of experiences, most notably mapping out invasive species in Nepal,
          building out a cyberrange for a cybersecurity training company, and more.
        </Typography>

        <Typography variant="body1" className="spacing">
          See my resume for more details: <Link href={Resume}>Resume</Link>
        </Typography>

        <Typography variant="body1" className="spacing">
          Check out my work below!
        </Typography>
      </Grid>

    </Grid>
  )
}

export default AboutSection