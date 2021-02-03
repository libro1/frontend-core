import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/login";
import HomePage from "./pages/home";

import PrivateRoute from "./components/privateRoute";
import UserContextProvider from "./context/userContext";

import "./App.css";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/home" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </UserContextProvider>
    </Router>
  );
}

export default App;
