import { motion } from "framer-motion"
import { tournament } from "../../Data/tournament"
import { useNavigate } from "react-router-dom"

function TournamentHero() {
  const navigate = useNavigate()

  return (
    <section className="text-center py-32 relative">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-pixel text-neonPink text-2xl mb-4"
      >
        {tournament.title}
      </motion.h1>

      <p className="font-pixel text-neonBlue text-xs mb-8">
        {tournament.subtitle}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate("/tournament/register")}
        className="
          font-pixel text-xs px-10 py-4
          border-2 border-neonPink text-neonPink
          hover:bg-neonPink hover:text-black
          shadow-[0_0_25px_#ff2fd2]
        "
      >
        REGISTER YOUR TEAM
      </motion.button>
    </section>
  )
}

export default TournamentHero
