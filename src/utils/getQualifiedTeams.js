/**
 * بياخد standings array
 * ويرجع أول فريقين من كل مجموعة
 */
export function getQualifiedTeams(standings) {
  if (!Array.isArray(standings)) return []

  // تجميع حسب الجروب
  const groups = standings.reduce((acc, team) => {
    acc[team.group] = acc[team.group] || []
    acc[team.group].push(team)
    return acc
  }, {})

  // ترتيب كل جروب واختيار أول 2
  const qualified = []

  Object.values(groups).forEach(group => {
    group.sort((a, b) =>
      b.points - a.points ||
      (b.goalsFor - b.goalsAgainst) -
        (a.goalsFor - a.goalsAgainst) ||
      b.goalsFor - a.goalsFor
    )

    qualified.push(group[0], group[1])
  })

  return qualified
}
