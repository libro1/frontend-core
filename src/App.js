import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './components/privateRoute'
import LoginPage from "./pages/login";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/asd" component={LoginPage} />
    </Router>
  );
}

export default App;
