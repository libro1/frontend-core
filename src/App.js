import LoginPage from "./pages/login";
//import sessionService from "./services/login";
import "./App.css";

function App() {
  // const login = async () => {
  //   try {
  //     await sessionService.login("javiemgz@gmail.com", "12345w6");
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
