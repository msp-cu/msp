import { useState } from "react"
import { projects } from "../../Data/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import clickSound from "..//../assets/click.mp3"

function Projects() {
  const [selected, setSelected] = useState(null)
   const playSound = () => {
          new Audio(clickSound).play()
        }
    
      const goNext = () => {
            playSound()
        document
          .getElementById("team")
          ?.scrollIntoView({ behavior: "smooth" })
      }

  return (
    <section id="Projects" className="py-32 bg-black text-center">
      {/* LEVEL TITLE */} 
      <p className="font-pixel text-neonPink text-xs mb-4">
        LEVEL 4
      </p>
      <h2 className="font-pixel text-neonPink text-xl mb-6">
        PROJECT SHOWCASE
      </h2>

      <div className="
  grid gap-8
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  max-w-7xl mx-auto px-6
">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>
{/* CONTINUE */}
      <div className="mt-20">
        <span
          onClick={goNext}
          className="
            font-pixel text-neonBlue text-xs
            cursor-pointer
            hover:text-white
            animate-pulse
          "
        >
          PRESS HERE TO CONTINUE ▶
        </span>
      </div>
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}

export default Projects
