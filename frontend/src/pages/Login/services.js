import baseApi from "../../services";

class LoginServices {
  static login() {
    return baseApi.get("/users");
  }
}

export default LoginServices;
