import restClient from "./axios";

class SessionService {
  async login(email, password) {
    return restClient.post("/login", { email:email, password: password }).then((res) => {
      sessionStorage.setItem("sessionToken",res.data.token);
      return res.data
    }).catch((e)=> {throw e})
  }
}

const sessionService = new SessionService();
export default sessionService;
