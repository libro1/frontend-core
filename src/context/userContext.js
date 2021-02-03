import { createContext, useState, useMemo } from "react";

import sessionService from '../services/sessionService'

export const UserContext = createContext(null);

const UserContextProvider = props => {
  const [user, setUser] = useState(sessionService.getCookie());
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);


  return (
      <UserContext.Provider value={providerValue} >
          {props.children}
      </UserContext.Provider>
  );
};

export default UserContextProvider

