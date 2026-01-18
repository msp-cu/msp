import { motion } from "framer-motion"

function InsertCoin({ onStart }) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.button
        onClick={onStart}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          font-pixel
          text-neonPink
          border-4 border-neonPink
          px-12 py-6
          text-lg
          tracking-widest
          bg-darkBg
          shadow-[0_0_25px_#ff2fd2]
          hover:bg-neonPink
          hover:text-black
          hover:shadow-[0_0_40px_#ff2fd2]
          transition-all
          animate-pulse
        "
      >
        PRESS START
      </motion.button>
    </div>
  )
}

export default InsertCoin
