const remoteURL = "http://localhost:5002"

export default {
  get(reservationId) {
    return fetch(`${remoteURL}/reservations/${reservationId}?embed=rooms`).then(result => result.json())
  },
  getAll() {
    const userId = JSON.parse(sessionStorage.getItem("credentials"))
    // console.log(userId.id)
    console.log("USER ID", userId.id)
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
  },

  getReservationByUserId(userId) {
    return fetch(`${remoteURL}/reservations?userId=${userId}&_expand=room`).then(result => result.json())
  },

  getServices(){
    return fetch(`${remoteURL}/services`).then(result => result.json())
  },


  postNewReservationService(service) {
   return fetch (`${remoteURL}/reservationServices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(service)
    }).then(data => data.json())
  },

  deleteReservationService(id) {
    return fetch(`${remoteURL}/reservationServices/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
  }
};

