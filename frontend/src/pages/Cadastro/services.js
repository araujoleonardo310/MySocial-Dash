import baseApi from "../../services";

class RegisterUsersAndVideos {
  static lastUsers() {
    return baseApi.get("/users");
  }

  static register(data) {
    return baseApi.post("/users", data);
  }
}

export default RegisterUsersAndVideos;
