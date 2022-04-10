import React from "react"
import { Chip, Typography, Avatar, Stack, Grid } from "@mui/material"
import Pic from "./../profile.jpg"
import "./components.css"

const Project = ({ title, description, technologies, link, pic }) => {

  return (
    <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
      <Stack direction={{ xs: 'column', sm: 'row' }} className="project-div" alignItems={{xs: "center", sm: "flex-start"}}>
        <Avatar alt="Johnny Yang" xs="auto" src={pic} sx={{ width: 128, height: 128, mr: 2 }} />

        <Stack direction="column" spacing={2}>
          <Typography variant="h5" textAlign={{xs: "center", sm: "left"}}>{title}</Typography>
          <Typography variant="body2" textAlign={{xs: "center", sm: "left"}}>{description}</Typography>

          {/* Change when reaching 290 size */}
          {/* Display none here when sm size */}

          {/* <Stack direction="row" sx={{display: { xl: "none", }}}>
            {technologies.map(technology => <Chip key={technology.id} label={technology.name} color={technology.color} variant="filled" sx={{ p: 0.5, m: 0.5 }} />)}
          </Stack> */}


          <Grid container sx={{ display: { md: "flex"} }}>
            {technologies.map(technology => <Grid item xs={5} sm={4} md={2} lg={1.5}><Chip key={technology.id} label={technology.name} color={technology.color} variant="filled" sx={{ p: 0.5, m: 0.5 }} /> </Grid>)}
          </Grid>
        </Stack>

      </Stack>
    </a>
  )

}

export default Project