const remoteURL = "http://localhost:5002"

export default {
  getUserByEmail(email) {
    return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json())
  },
  
  getUserById(id) {
    return fetch(`${remoteURL}/users?email=${id}`).then(result => result.json())
  },

};