import { motion } from "framer-motion"

function Countdown({ date }) {
  const target = new Date(date).getTime()
  const now = new Date().getTime()
  const diff = target - now

  const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-neonPink font-pixel text-xs mt-2"
    >
      ⏳ {days} Days Left
    </motion.div>
  )
}

export default Countdown
