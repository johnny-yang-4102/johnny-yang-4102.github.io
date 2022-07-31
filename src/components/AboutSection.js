import React from "react"
import { Link, Typography, Avatar, Grid } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Resume from "./../Resume.pdf"
import Pic from "./../profile.jpeg"
import './components.css'

const AboutSection = () => {
  return (
    <Grid container spacing={2} justifyContent="center">

      
      <Grid item xs={12} sm="auto">
        <Avatar alt="Johnny Yang" src={Pic} sx={{ width: 256, height: 256 }} />
      </Grid>

      <Grid item xs={12} sm={6} >
        <Typography variant="h5" className="spacing">
          Hi I'm Johnny Yang,
        </Typography>

        <Typography variant="h5" className="spacing">
          an aspiring full-stack software engineer.
        </Typography>
        <Typography variant="body1" className="spacing">
          I've professionally worked on a diverse range of experiences, 
          from research involving ML models identifying invasive species in Nepal
          to a corporate internship building an integrated financial data-pipeline monitoring tool for multi-connected Kafka enterprise systems. 
        </Typography>

        <Typography variant="body1" className="spacing">
          See my resume for more details: <Link href={Resume}>Resume</Link>
        </Typography>

        <Typography variant="body1" className="spacing">
          Email: <Link href="#">jyang@virginia.edu</Link>
        </Typography>

        <Typography variant="body1" className="spacing">
          Check out my projects below!
        </Typography>
      </Grid>

    </Grid>
  )
}

export default AboutSection