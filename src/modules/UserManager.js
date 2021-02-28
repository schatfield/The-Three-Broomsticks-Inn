const remoteURL = "https://broomsticks-json.herokuapp.com";

export default {
  getUserByEmail(email) {
    return fetch(`${remoteURL}/users?email=${email}`).then((result) =>
      result.json()
    );
  },

  getUserById(id) {
    return fetch(`${remoteURL}/users?email=${id}`).then((result) =>
      result.json()
    );
  },

  postNewUser(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((result) => result.json());
  },

  searchUser(email) {
    return fetch(`${remoteURL}/users?q=${email}`).then((data) => data.json());
  },
};
