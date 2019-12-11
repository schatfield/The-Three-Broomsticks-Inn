const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/rooms/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/rooms`).then(result => result.json())
  }
}