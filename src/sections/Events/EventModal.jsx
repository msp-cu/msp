
import { motion } from "framer-motion"
import Countdown from "./Countdown"

function EventModal({ event, onClose }) {
  if (!event) return null

  const hasBooking = Boolean(event.bookingLink)
  const haslink = Boolean(event.link)

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

        {/* DESCRIPTION */}
        {event.history && (
          <p className="text-white/70 text-xs mt-3">
            {event.history}
          </p>
        )}

        {/* UPCOMING COUNTDOWN */}
        {event.status === "upcoming" && (
          <div className="mt-4">
            <Countdown date={event.date}
             />
          </div>
        )}

        

        {/* STATS */}
        {event.stats && (
          <div className="flex flex-wrap gap-4 mt-4 text-xs text-neonPink">
            {event.stats.attendees && (
              <span>👥 +{event.stats.attendees} Attendees</span>
            )}
            {event.stats.speakers && (
              <span>🎤 +{event.stats.speakers} Speakers</span>
            )}
            {event.stats.teams && (
              <span>👾 +{event.stats.teams} Teams</span>
            )}
            {event.stats.players && (
              <span>🕹️ +{event.stats.players} Players</span>
            )}
          </div>
        )}

        {/* JOIN BUTTON (ALWAYS VISIBLE IF EXISTS) */}
        {hasBooking && (
          <a
            href={event.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block mt-6 text-center
              border-2 border-neonPink py-3
              font-pixel text-xs text-neonPink
              hover:bg-neonPink hover:text-black
              shadow-[0_0_20px_#ff2fd2]
            "
          >
            JOIN EVENT
          </a>
        )}

        {/* JOIN BUTTON (ALWAYS VISIBLE IF EXISTS) */}
        {haslink &&  (
          <a
            href={event.link}
            target="_self"
            rel="noopener noreferrer"
            className="
              block mt-6 text-center
              border-2 border-neonPink py-3
              font-pixel text-xs text-neonPink
              hover:bg-neonPink hover:text-black
              shadow-[0_0_20px_#ff2fd2]
            "
          >
            JOIN EVENT
          </a>
        )}

        {/* PLANNED NOTE */}
        {event.status === "planned" && !hasBooking && (
          <p className="text-white/60 text-xs mt-4">
            🎮 Event planned — stay tuned!
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-6 block mx-auto text-xs text-white/50 hover:text-neonPink"
        >
          CLOSE
        </button>
      </motion.div>
    </div>
  )
}

export default EventModal
