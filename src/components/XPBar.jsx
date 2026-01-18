function XPBar({ xp }) {
  const maxXP = 500
  const percent = Math.min((xp / maxXP) * 100, 100)

  return (
    <div className="max-w-md mx-auto mb-16">
      <p className="font-pixel text-xs mb-2 text-neonBlue">
        XP: {xp}
      </p>
      <div className="w-full h-3 bg-gray-800 rounded">
        <div
          className="h-3 bg-neonBlue rounded transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export default XPBar
