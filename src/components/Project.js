import React from "react"
import { Chip } from "@mui/material"

const Project = ({title, description, technologies}) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      {technologies.map(technology => <Chip key={technology.id} label={technology.name} color="primary" variant="outlined"/>)}
    </div>
  )
}

export default Project