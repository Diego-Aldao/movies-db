import React from "react";
import { useState } from "react";

const FavoritosContext = React.createContext({});

export const FavoritosContextProvider = ({ children }) => {
  const favoritosLS = JSON.parse(localStorage.getItem("Favoritos"));
  const [favoritos, setFavoritos] = useState(favoritosLS || []);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosContext;
