import React from "react"
import { Chip, Typography } from "@mui/material"

const Project = ({title, description, technologies}) => {
  
  console.log(technologies)
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      {technologies.map(technology => <Chip key={technology.id} label={technology.name} color={technology.color} variant="filled" sx={{p: 0.5, m: 0.5}} />)}
    </div>
  )

}

export default Project