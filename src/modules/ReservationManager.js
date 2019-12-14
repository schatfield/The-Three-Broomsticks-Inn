const remoteURL = "http://localhost:5002"

export default {
  get(reservationId) {
    return fetch(`${remoteURL}/reservations/${reservationId}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/reservations`).then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/reservations/${id}`, {
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
  update(editedReservation) {
    return fetch(`${remoteURL}/reservations/${editedReservation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReservation)
    }).then(data => data.json());
  }
};