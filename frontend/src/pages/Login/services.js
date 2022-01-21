import baseApi from "../../services";

class LoginServices {
  static listUsers() {
    return baseApi.get("/users");
  }
}

export default LoginServices;
