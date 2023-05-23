import { useContext } from "react";
import FavoritosContext from "../Context/FavoritosContext";

const useFavoritos = () => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const guardarFavorito = (media) => {
    //SI EL PRODUCTO YA EXISTE
    if (favoritos?.some((favorito) => favorito.id === media.id)) {
      let arrayFavoritos = favoritos.filter(
        (favorito) => favorito.id !== media.id
      );
      localStorage.setItem("Favoritos", JSON.stringify(arrayFavoritos));

      setFavoritos(arrayFavoritos);
    } else {
      //SI EL PRODUCTO NO EXISTE
      let arrayFavoritos = [];
      if (!localStorage.getItem("Favoritos")) {
        arrayFavoritos.push(media);
        localStorage.setItem("Favoritos", JSON.stringify(arrayFavoritos));
      } else {
        arrayFavoritos = JSON.parse(localStorage.getItem("Favoritos"));
        arrayFavoritos.push(media);
        localStorage.setItem("Favoritos", JSON.stringify(arrayFavoritos));
      }

      setFavoritos((prevArray) => [...prevArray, media]);
    }
  };
  return { favoritos, guardarFavorito };
};

export default useFavoritos;
