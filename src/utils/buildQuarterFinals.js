export function buildQuarterFinals(qualifiedTeams) {
  if (!Array.isArray(qualifiedTeams) || qualifiedTeams.length !== 8) {
    return []
  }

  // Group teams
  const groups = qualifiedTeams.reduce((acc, team) => {
    acc[team.group] = acc[team.group] || []
    acc[team.group].push(team)
    return acc
  }, {})

  // ترتيب كل جروب (احتياطي أمان)
  Object.values(groups).forEach(group => {
    group.sort((a, b) =>
      b.points - a.points ||
      (b.goalsFor - b.goalsAgainst) -
        (a.goalsFor - a.goalsAgainst) ||
      b.goalsFor - a.goalsFor
    )
  })

  return [
    {
      id: 1,
      home: groups.A[0], // A1
      away: groups.B[1], // B2
      round: "Quarter Final"
    },
    {
      id: 2,
      home: groups.B[0], // B1
      away: groups.A[1], // A2
      round: "Quarter Final"
    },
    {
      id: 3,
      home: groups.C[0], // C1
      away: groups.D[1], // D2
      round: "Quarter Final"
    },
    {
      id: 4,
      home: groups.D[0], // D1
      away: groups.C[1], // C2
      round: "Quarter Final"
    }
  ]
}
