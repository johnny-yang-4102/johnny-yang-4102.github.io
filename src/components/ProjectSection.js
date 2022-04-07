import React from "react"
import Project from './Project'
import { Stack, Divider } from "@mui/material"

/*/
default: grey
error: red
info/primary: cyan
secondary: purple
success: green
warning: orange
/*/
const technologyColors = {
  "React" : "primary",
  "Node" : "success",
  "Express" : "default",
  "Heroku" : "secondary",
  "Javascript" : "warning",

  "Android" : "success",
  "XML" : "default",
  "Java" : "warning"
}

const projectData = [
    {
        id: 1,
        title: "HoosYourFit",
        description: "hackathon app i made",
        technologies: [
            {id: 1, name: "React", color: technologyColors["React"]},
            {id: 2, name: "Node", color: technologyColors["Node"]},
            {id: 3, name: "Express", color: technologyColors["Express"]},
            {id: 4, name: "Heroku", color: technologyColors["Heroku"]},
            {id: 5, name: "Javascript", color: technologyColors["Javascript"]}
        ]
    },
    {
        id: 2,
        title: "PathThink",
        description: "android app",
        technologies: [
            {id: 1, name: "Android", color: technologyColors["Android"]},
            {id: 2, name: "XML", color: technologyColors["XML"]},
            {id: 3, name: "Java", color: technologyColors["React"]}
        ]
    }

]

const ProjectSection = () => {
  return (
    <Stack direction="column" spacing={4} divider={<Divider orientation="horizontal" flexItem />}>
      {projectData.map(project => <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies}/>)}
    </Stack>
  )
}

export default ProjectSection