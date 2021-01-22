import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import SessionService from "../services/sessionService";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogged, setIsLogged] = useState(undefined);

  useEffect(() => {
    
    SessionService.isLogged().then((res) => setIsLogged(res));
  }, []);

  if(isLogged === undefined)
    return(<div>Loading</div>)

  return (
    <div>
      {isLogged && "Logged in"}
      <Route
        exact
        {...rest}
        render={(props) =>
          isLogged ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </div>
  );
};
export default PrivateRoute;
