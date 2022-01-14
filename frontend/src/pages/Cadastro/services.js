import baseApi from "../../services";

class RegisterUsersAndVideos {
  static register(data) {
    return baseApi.post("/users", data);
  }
}

export default RegisterUsersAndVideos;