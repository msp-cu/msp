import { useState } from "react"
import { events } from "../../Data/events"
import EventCard from "./EventCard"
import EventModal from "./EventModal"

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <section id="events" className="py-32 bg-black text-center">
      <h2 className="font-pixel text-neonPink mb-16">
        EVENTS LOG
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onOpen={setSelectedEvent}
          />
        ))}
      </div>

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
