const remoteURL = "http://localhost:5002"

export default {
  getUserByEmail(email) {
    return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json())
  }}