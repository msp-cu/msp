function EventCard({ event, onOpen }) {
  return (
    <div
      onClick={() => onOpen(event)}
      className="
        cursor-pointer
        border-2 border-neonPink
        rounded-lg p-5
        w-64 bg-black
        font-pixel text-xs
        hover:shadow-[0_0_25px_#ff2fd2]
        transition
      "
    >
      <h3 className="text-neonPink mb-2">
        {event.title}
      </h3>

      {/* STATUS */}
      <p className="text-white/50 mb-2">
        {event.status.toUpperCase()}
      </p>

      {/* CTA */}
      {event.status === "upcoming" && (
        <p className="text-cyan-400 text-[10px]">
          Click to reserve
        </p>
      )}

      {event.status === "planned" && (
        <p className="text-yellow-400 text-[10px]">
          Coming soon
        </p>
      )}

      {event.status === "completed" && (
        <p className="text-green-400 text-[10px]">
          View history
        </p>
      )}
    </div>
  )
}
