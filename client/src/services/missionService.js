const baseURL = 'http://localhost:3000/api/bookings/'

export default {
  getBookings() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  addMission(mission) {
    return fetch("http://localhost:3000/api/bookings/", {
      method: "POST",
      body: JSON.stringify(mission),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  }
}
