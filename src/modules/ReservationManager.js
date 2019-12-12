const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/reservations/${id}`).then(result => result.json())
  },
//   getAll() {
//     return fetch(`${remoteURL}/reservations`).then(result => result.json())
//   },

//   delete(id) {
//     return fetch(`http://localhost:5002/reservations/${id}`, {
//         method: "DELETE"
//     })
//     .then(result => result.json())
//   },
  post(newReservation) {
    return fetch(`${remoteURL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReservation)
    }).then(data => data.json())
  },
//   update(editedLocation) {
//     return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(editedLocation)
//     }).then(data => data.json());
//   },

//    getWithEmployees(id) {
//         return fetch(`${remoteURL}/locations/${id}?_embed=employees`)
//                 .then(result => result.json())
//     }
};