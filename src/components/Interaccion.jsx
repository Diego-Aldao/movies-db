import { useEffect } from "react";
import useCurrentInteraccion from "../hooks/useCurrentInteraccion";
import useFavoritos from "../hooks/useFavoritos";
import useGuardados from "../hooks/useGuardados";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledInteraccion = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  svg {
    width: 25px;
    height: 25px;
    color: var(--color-principal);
  }
`;

const Interaccion = ({ objetoInfo, className }) => {
  const { favoritos, guardarFavorito } = useFavoritos();
  const { guardados, añadirGuardado } = useGuardados();
  const { liked, saved, getCurrentInteraccion } = useCurrentInteraccion();

  const handleAñadir = (tipo) => {
    if (tipo === "favoritos") {
      guardarFavorito(objetoInfo);
    } else if (tipo === "guardados") {
      añadirGuardado(objetoInfo);
    }
  };

  useEffect(() => {
    getCurrentInteraccion(objetoInfo);
  }, [favoritos, guardados]);

  return (
    <StyledInteraccion className={className}>
      <Icon
        icon={liked ? "tabler:heart-filled" : "tabler:heart"}
        onClick={() => {
          handleAñadir("favoritos");
        }}
      />

      <Icon
        icon={saved ? "tabler:bookmark-filled" : "tabler:bookmark-plus"}
        onClick={() => {
          handleAñadir("guardados");
        }}
      />
    </StyledInteraccion>
  );
};

export default Interaccion;
