import baseApi from "../../services";

class UsersServices {
  static listUsers() {
    return baseApi.get("/users");
  }
}

export default UsersServices;