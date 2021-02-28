const remoteURL = "https://broomsticks-json.herokuapp.com"

export default {
  get(id) {
    return fetch(`${remoteURL}/galleryImages/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/galleryImages`).then(result => result.json())
  }
}