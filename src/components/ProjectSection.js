import React from "react"
import Project from './Project'
import { Stack, Divider } from "@mui/material"
import hoosyourfit from "./../hoosyourfit.png"
import paththink from "./../paththink.PNG"
import customdeath from "./../customdeath.png"

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
  "Java" : "warning",

  "Spigot" : "error",
  "Vault" : "success",
  "YAML" : "default"
}

const projectData = [
    {
        id: 1,
        title: "HoosYourFit",
        description: "2nd place Health Hack at the University of Virginia. A web app to find your next workout partner based on compatibility scores.",
        technologies: [
            {id: 1, name: "React", color: technologyColors["React"]},
            {id: 2, name: "Node", color: technologyColors["Node"]},
            {id: 3, name: "Express", color: technologyColors["Express"]},
            {id: 4, name: "Heroku", color: technologyColors["Heroku"]},
            {id: 5, name: "Javascript", color: technologyColors["Javascript"]}
        ],
        link: "https://devpost.com/software/hoosyourfit?ref_content=my-projects-tab&ref_feature=my_projects",
        pic: hoosyourfit
    },
    {
        id: 2,
        title: "PathThink",
        description: "Android app providing users a fun experience to train their working memory with different tile manipulations. ",
        technologies: [
            {id: 1, name: "Android", color: technologyColors["Android"]},
            {id: 2, name: "XML", color: technologyColors["XML"]},
            {id: 3, name: "Java", color: technologyColors["React"]}
        ],
        link: "https://apkcombo.com/paththink-brain-game/com.j4102.mazebrain/",
        pic: paththink
    },

    {
      id: 3,
      title: "CustomDeath",
      description: "A Minecraft server plugin garnering 20k+ downloads. Used for customizing player death animations, chat broadcasts, and economic payouts/losses.",
      technologies: [
          {id: 1, name: "Spigot", color: technologyColors["Spigot"]},
          {id: 2, name: "YAML", color: technologyColors["YAML"]},
          {id: 3, name: "Vault", color: technologyColors["Vault"]},
          {id: 3, name: "Java", color: technologyColors["Java"]}
      ],
      link: "https://www.spigotmc.org/resources/customdeath-head-drops-money-taken.26457/",
      pic: customdeath
  }

]

const ProjectSection = () => {
  return (
    <Stack direction="column" spacing={2} divider={<Divider light orientation="horizontal" sx={{ borderBottomWidth: 2 }} flexItem />}>
      {projectData.map(project => <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies} link={project.link} pic={project.pic}/>)}
    </Stack>
  )
}

export default ProjectSection