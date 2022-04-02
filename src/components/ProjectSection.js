import React from "react"
import Project from './Project'


const projectData = [
    {
        id: 1,
        title: "HoosYourFit",
        description: "hackathon app i made",
        technologies: [
            {id: 1, name: "React"},
            {id: 2, name: "Node"},
            {id: 3, name: "Express"},
            {id: 4, name: "Heroku"},
            {id: 5, name: "Javascript"}
        ]
    },
    {
        id: 2,
        title: "PathThink",
        description: "android app",
        technologies: [
            {id: 1, name: "Android"},
            {id: 2, name: "XML"},
            {id: 3, name: "Java"}
        ]
    }

]

const ProjectSection = () => {
  return (
    <div>
      {projectData.map(project => <Project key={project.id} title={project.title} description={project.description} technologies={project.technologies}/>)}
    </div>
  )
}

export default ProjectSection