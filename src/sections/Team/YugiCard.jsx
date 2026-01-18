import { motion } from "framer-motion"

const rarityGlow = {
  legendary: "shadow-[0_0_35px_#facc15] border-yellow-400",
  epic: "shadow-[0_0_30px_#a855f7] border-purple-500",
  rare: "shadow-[0_0_25px_#22d3ee] border-cyan-400",
}

function YugiCard({ card }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      className={`
        bg-black border-2 rounded-xl p-4
        w-64 font-pixel text-xs
        ${rarityGlow[card.rarity]}
      `}
    >
      {/* Image */}
      <div className="w-full h-50 rounded-md overflow-hidden mb-3">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <h3 className="text-neonPink text-sm">{card.name}</h3>
      <p className="text-white/60">{card.role}</p>

      {/* XP */}
      <div className="mt-3">
        <div className="flex justify-between text-[10px] text-white/50 mb-1">
          <span>XP</span>
          <span>{card.xp}%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded">
          <div
            className="h-full bg-neonPink rounded"
            style={{ width: `${card.xp}%` }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-[10px] text-white/70">
        {card.description}
      </p>
    </motion.div>
  )
}

export default YugiCard
