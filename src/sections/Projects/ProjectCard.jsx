function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer
        border-2 border-neonPink
        bg-black overflow-hidden
        shadow-[0_0_20px_#ff2fd2]
        hover:shadow-[0_0_40px_#ff2fd2]
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-contain
            scale-75 group-hover:scale-95
            transition-transform duration-500
          "
        />

        {/* OVERLAY */}
        <div className="
          absolute inset-0
          bg-black/70 opacity-0
          group-hover:opacity-100
          flex items-center justify-center
          transition-opacity duration-300
        ">
          <span className="font-pixel text-xs text-neonBlue">
            VIEW DETAILS
          </span>
        </div>
      </div>

      {/* INFO */}
      <div className="p-4 text-left">
        <h3 className="font-pixel text-neonPink text-sm mb-1">
          {project.title}
        </h3>
        <p className="text-white/50 text-[10px]">
          Season · {project.year}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
