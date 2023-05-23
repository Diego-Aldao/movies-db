import { useState } from "react";
import useGuardados from "./useGuardados";
import useFavoritos from "./useFavoritos";

const useCurrentInteraccion = () => {
  const { guardados } = useGuardados();
  const { favoritos } = useFavoritos();
  const [liked, setLiked] = useState();
  const [saved, setSaved] = useState();

  const getCurrentInteraccion = (item) => {
    let currentGuardado = guardados?.some(
      (guardado) => guardado.id === item.id
    );
    setSaved(currentGuardado);

    let currentFavorito = favoritos?.some(
      (favorito) => favorito.id === item.id
    );
    setLiked(currentFavorito);
  };

  return { liked, saved, getCurrentInteraccion };
};

export default useCurrentInteraccion;
