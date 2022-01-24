import baseApi from "../../services";

class UsersServices {
  static listUsers() {
    return baseApi.get("/users");
  }

  static deletUser(id) {
    return baseApi.delete(`/users/${id}`)
  }
}

export default UsersServices;