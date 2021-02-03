import restClient from "./axios";

class SessionService {
  async login(email, password) {
    return restClient
      .post("/login", { email, password })
      .then((res) => {
        sessionStorage.setItem("cookie", JSON.stringify(res.data));
        return res.data;
      })
      .catch((e) => {
        throw e;
      });
  }

  getCookie() {
    const cookie = sessionStorage.getItem("cookie");
    return cookie ? JSON.parse(cookie) : null
  }

  async isLogged() {
    const token = sessionStorage.getItem("cookie");
    if (!token) return false;
    try {
      const tokenValidation = await restClient.get("/check-token");
      return tokenValidation.data.isValid;
    } catch (e) {
      return false;
    }
  }
}

const sessionService = new SessionService();
export default sessionService;
