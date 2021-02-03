import React, { useEffect, useState, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../context/userContext";
import SessionService from "../services/sessionService";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogged, setIsLogged] = useState(undefined);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) SessionService.isLogged().then((res) => setIsLogged(res));
    else setIsLogged(false);
  }, [user]);

  if (isLogged === undefined) return <div>Loading</div>;
  return (
    <div>
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
