const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/gallery/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/gallery`).then(result => result.json())
  }
}