import { useState } from "react"
import { events } from "../../Data/events"
import EventCard from "./EventCard"
import EventModal from "./EventModal"
import clickSound from "..//../assets/click.mp3"


function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

   const playSound = () => {
      new Audio(clickSound).play()
    }

  const goNext = () => {
        playSound()
    document
      .getElementById("team")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="events" className="py-32 bg-black text-center">

      {/* LEVEL TITLE */}
      <p className="font-pixel text-neonPink text-xs mb-4">
        LEVEL 2
      </p>

      <h2 className="font-pixel text-neonPink mb-16">
        EVENTS LOG
      </h2>

      {/* EVENTS GRID */}
      <div className="flex flex-wrap justify-center gap-10">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onOpen={setSelectedEvent}
          />
        ))}
      </div>

      {/* CONTINUE */}
      <div className="mt-20">
        <span
          onClick={goNext}
          className="
            font-pixel text-neonBlue text-xs
            cursor-pointer
            hover:text-white
            animate-pulse
          "
        >
          PRESS HERE TO CONTINUE ▶
        </span>
      </div>

      {/* MODAL */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  )
}

export default Events
