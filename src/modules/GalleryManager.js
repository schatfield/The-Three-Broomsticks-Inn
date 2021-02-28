const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/galleryImages/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/galleryImages`).then((result) => result.json());
  },
};
