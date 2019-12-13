const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/reservations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/reservations`).then(result => result.json())
  },

  delete(id) {
    return fetch(`http://localhost:5002/reservations/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newReservation) {
    return fetch(`${remoteURL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReservation)
    }).then(data => data.json())
  },
  updateReservation(editedReservation) {
    return fetch(`${remoteURL}/locations/${editedReservation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReservation)
    }).then(data => data.json());
  }
};