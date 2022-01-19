import baseApi from "../../services";

class RegisterUsersAndVideos {
  static dbUsers() {
    return baseApi.get("/users");
  }

  static register(data) {
    return baseApi.post("/users", data);
  }
}

export default RegisterUsersAndVideos;
