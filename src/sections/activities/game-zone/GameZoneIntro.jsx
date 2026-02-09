import { motion } from "framer-motion"

export default function GameZoneIntro({ onEnter }) {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6d28d9_0%,transparent_60%)] opacity-30" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center z-10"
      >
        <h1 className="font-pixel text-4xl text-neonPink mb-4">
          MSP GAME ZONE
        </h1>

        <p className="text-white/70 text-sm mb-8">
          Play. Compete. Discover Student Activities.
        </p>

        <button
          onClick={onEnter}
          className="
            border-2 border-neonPink px-8 py-4
            font-pixel text-neonPink text-sm
            hover:bg-neonPink hover:text-black
            shadow-[0_0_30px_#ff2fd2]
          "
        >
          ENTER ARCADE
        </button>
      </motion.div>
    </section>
  )
}
