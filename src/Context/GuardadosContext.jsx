import React from "react";
import { useState } from "react";

const GuardadosContext = React.createContext({});

export const GuardadosContextProvider = ({ children }) => {
  const guardadosLS = JSON.parse(localStorage.getItem("Favoritos"));
  const [guardados, setGuardados] = useState(guardadosLS || []);

  return (
    <GuardadosContext.Provider value={{ guardados, setGuardados }}>
      {children}
    </GuardadosContext.Provider>
  );
};

export default GuardadosContext;
