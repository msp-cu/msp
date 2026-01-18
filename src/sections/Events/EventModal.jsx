import { motion } from "framer-motion"
import Countdown from "./Countdown"

function EventModal({ event, onClose }) {
  if (!event) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
          bg-black border-2 border-neonPink
          p-6 w-[90%] max-w-lg
          rounded-xl shadow-[0_0_30px_#ff2fd2]
        "
      >
        <h2 className="font-pixel text-neonPink text-lg mb-3">
          {event.title}
        </h2>

        {/* UPCOMING */}
        {event.status === "upcoming" && (
          <>
            <Countdown date={event.date} />
            <a
              href={event.bookingLink}
              target="_blank"
              className="
                block mt-4 text-center
                border border-neonPink
                py-2 font-pixel text-xs
                hover:bg-neonPink hover:text-black
              "
            >
              JOIN EVENT
            </a>
          </>
        )}

        {/* COMPLETED */}
        {event.status === "completed" && (
          <>
            <p className="text-white/70 text-xs mt-3">
              {event.history}
            </p>

            <div className="flex gap-6 mt-4 text-xs text-neonPink">
              <span>👥 {event.stats.attendees}</span>
              <span>👾 {event.stats.teams} Teams</span>
            </div>
          </>
        )}

        {/* PLANNED */}
        {event.status === "planned" && (
          <p className="text-white/60 text-xs mt-3">
            🎮 Event planned… stay tuned!
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-6 text-xs text-white/50 hover:text-neonPink"
        >
          CLOSE
        </button>
      </motion.div>
    </div>
  )
}

export default EventModal
