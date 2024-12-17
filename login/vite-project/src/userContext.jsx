import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
export function UserProvider({ children }) {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("users");

    if (data) {
      setUserLogged(JSON.parse(data));
    }
  });

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserLogged(user);
  };
  const logout = (user) => {
    localStorage.setItem("user");
    setUserLogged(null);
  };

  return (
    <userContext.Provider value={{ login, logout, userLogged }}>
      {children}
    </userContext.Provider>
  );
}
