import { useContext } from "react";
import GuardadosContext from "../Context/GuardadosContext";

const useGuardados = () => {
  const { guardados, setGuardados } = useContext(GuardadosContext);

  const añadirGuardado = (media) => {
    //SI EL PRODUCTO YA EXISTE
    if (guardados?.some((guardado) => guardado.id === media.id)) {
      let arrayGuardados = guardados.filter(
        (guardado) => guardado.id !== media.id
      );

      localStorage.setItem("Guardados", JSON.stringify(arrayGuardados));

      setGuardados(arrayGuardados);
    } else {
      //SI EL PRODUCTO NO EXISTE
      let arrayGuardados = [];
      if (!localStorage.getItem("Guardados")) {
        arrayGuardados.push(media);
        localStorage.setItem("Guardados", JSON.stringify(arrayGuardados));
      } else {
        arrayGuardados = JSON.parse(localStorage.getItem("Guardados"));
        arrayGuardados.push(media);
        localStorage.setItem("Guardados", JSON.stringify(arrayGuardados));
      }
      setGuardados((prevArray) => [...prevArray, media]);
    }
  };

  return { guardados, añadirGuardado };
};

export default useGuardados;
