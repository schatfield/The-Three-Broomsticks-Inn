const remoteURL = "https://broomsticks-json.herokuapp.com"

export default {
  get(id) {
    return fetch(`${remoteURL}/rooms/${id}`).then(result => result.json())
  },
  // getAll() {
  //   return fetch(`${remoteURL}/rooms`).then(result => result.json())
  // },
getAll() {
  return fetch(`${remoteURL}/rooms?_embed=roomImages`).then(result => result.json())
}
}