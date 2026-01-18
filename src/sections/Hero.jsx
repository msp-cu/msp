import { motion } from "framer-motion"
import clickSound from "../assets/click.mp3"

function Hero() {

  const playSound = () => {
    new Audio(clickSound).play()
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-darkBg pt-32">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >

        <h1 className="font-pixel text-neonBlue text-2xl md:text-4xl mb-8 drop-shadow-[0_0_20px_#00f0ff]">
          FROM IDEAS
          <br />
          TO IMPACT
        </h1>

        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          Welcome to MSP CU Arcade Season.  
          Learn. Build. Play. Level Up.
        </p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={playSound}
            className="font-pixel text-xs px-8 py-4 border-2 border-neonPink text-neonPink 
            hover:bg-neonPink hover:text-darkBg 
            shadow-[0_0_15px_#ff2fd2] hover:shadow-[0_0_30px_#ff2fd2]
            transition-all duration-300"
          >
            START GAME
          </button>

          <button
            className="font-pixel text-xs px-8 py-4 border-2 border-neonBlue text-neonBlue 
            hover:bg-neonBlue hover:text-darkBg 
            shadow-[0_0_15px_#00f0ff] hover:shadow-[0_0_30px_#00f0ff]
            transition-all duration-300"
          >
            NEXT LEVEL
          </button>
        </div>

      </motion.div>
      
    </section>
  )
}

export default Hero
