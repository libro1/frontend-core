import restClient from "./axios";

class SessionService {
  async login(email, password) {
    return restClient
      .post("/login", { email: email, password: password })
      .then((res) => {
        sessionStorage.setItem("sessionToken", res.data.token);
        return res.data;
      })
      .catch((e) => {
        throw e;
      });
  }

  async isLogged() {
    const token = sessionStorage.getItem("sessionToken");
    if (!token) return false;
    try{
      const tokenValidation = await restClient.get("/check-token")
      return tokenValidation.data.isValid
    }catch (e){
      return false
    }
  }

}

const sessionService = new SessionService();
export default sessionService;
