function TabsNavigation({ active, onChange }) {
  const tabs = [
    "Overview",
    "Groups",
    "QUARTER FINALS",
    "Semi Finals",
    "Third Place",
    "Final",
    "Winners",
  ]

  return (
    <div className="flex justify-center gap-10 border-b border-white/10 mb-12 font-pixel">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-4 text-sm tracking-widest transition-all
            ${
              active === tab
                ? " text-neonYellow border-b-2 border-neonYellow "
                : "text-white/50 hover:text-white"
            }
          `}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default TabsNavigation
