import { collaborations } from "../Data/collaborations"
import clickSound from "../assets/click.mp3"

function Collaborations() {
  const playSound = () => {
        new Audio(clickSound).play()
      }
  
    const goNext = () => {
          playSound()
      document
        .getElementById("Projects")
        ?.scrollIntoView({ behavior: "smooth" })
    }

  return (
    
    <section id="Collaborations" className="py-32 bg-darkBg text-center">

      {/* LEVEL TITLE */} 
      <p className="font-pixel text-neonPink text-xs mb-4">
        LEVEL 3
      </p>
      <h2 className="font-pixel text-neonPink text-xl mb-4">
        COLLABORATIONS
      </h2> 

      <p className="text-white/60 font-pixel text-xs mb-16">
        TRUSTED BY COMMUNITIES & PARTNERS
      </p>

      <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
        {collaborations.map((collab) => (
          <div
            key={collab.id}
            className="
              group w-36 h-36 flex items-center justify-center
              hover:scale-110 transition
            "
          >
            <img
              src={collab.logo}
              alt={collab.name}
              className="max-h-20 opacity-80 group-hover:opacity-100"
            />
            
          </div>
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
    </section>
    
  )
}

export default Collaborations
