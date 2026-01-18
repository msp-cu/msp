import { motion } from "framer-motion"

function LevelCard({ level }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className={`
        relative p-6 border-2 rounded-xl cursor-pointer
        border-${level.color} text-${level.color}
        bg-darkBg
      `}
      style={{
        boxShadow: `0 0 20px ${level.glow}`
      }}
    >
      <h3 className="font-pixel text-lg mb-2">
        {level.title}
      </h3>

      <p className="text-xs opacity-80 mb-4">
        {level.subtitle}
      </p>

      <p className="text-white/70 text-sm">
        {level.desc}
      </p>

      <span className="absolute top-3 right-3 font-pixel text-xs">
        LVL {level.id}
      </span>
    </motion.div>
  )
}

export default LevelCard
