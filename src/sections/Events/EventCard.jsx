import { motion } from "framer-motion"

function EventCard({ event, onOpen }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        bg-black border-2 border-neonPink
        w-72 p-4 rounded-xl
        shadow-[0_0_25px_#ff2fd2]
        cursor-pointer
      "
      onClick={() => onOpen(event)}
    >
      <div className="h-40 w-full mb-3 overflow-hidden rounded-md">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-pixel text-neonPink text-sm">
        {event.title}
      </h3>

      <p className="text-white/50 text-[10px] mt-1">
        {event.status.toUpperCase()}
      </p>
    </motion.div>
  )
}

export default EventCard
