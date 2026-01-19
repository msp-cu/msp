import { motion } from "framer-motion"

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
          bg-black border-2 border-neonPink
          p-6 w-[90%] max-w-lg
          shadow-[0_0_40px_#ff2fd2]
        "
      >
        <h2 className="font-pixel text-neonPink text-lg mb-4">
          {project.title}
        </h2>

        <p className="text-white/70 text-xs mb-4">
          {project.description}
        </p>

        <p className="text-neonBlue text-xs mb-2">
          🎮 Teams: {project.teams.join(", ")}
        </p>

        <p className="text-neonBlue text-xs mb-4">
          🛠 Tech: {project.tech.join(", ")}
        </p>

        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            className="
              block text-center border border-neonPink py-2
              font-pixel text-xs hover:bg-neonPink hover:text-black
            "
          >
            VIEW PROJECT
          </a>
        )}

        <button
          onClick={onClose}
          className="mt-4 block mx-auto text-white/50 hover:text-neonPink"
        >
          CLOSE
        </button>
      </motion.div>
    </div>
  )
}

export default ProjectModal
