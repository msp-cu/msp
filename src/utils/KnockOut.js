useEffect(() => {
  fetch(KNOCKOUT_MATCHES_API)
    .then(res => res.json())
    .then(data => console.log("KNOCKOUT MATCHES", data))
}, [])
