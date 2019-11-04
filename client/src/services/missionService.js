const baseURL = 'http://localhost:3000/api/missions/'

export default {
  getMissions() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  addMission(mission) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(mission),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  }
}
