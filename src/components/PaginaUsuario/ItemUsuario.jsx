import styled from "styled-components";
import { StyledItem } from "../PaginaBusqueda/ItemBusqueda";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import useGuardados from "../../hooks/useGuardados";
import useFavoritos from "../../hooks/useFavoritos";
import { useNavigate } from "react-router-dom";
import useCurrentInteraccion from "../../hooks/useCurrentInteraccion";
import FailedImage from "../FailedImage";

const StyledItemUsuario = styled(StyledItem)`
  flex-direction: column;
  height: auto;
  .main-info {
    display: flex;
    cursor: pointer;
  }
  .interaccion {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 15px 10px;
    border-top: 3px solid var(--bg-principal);
    gap: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
    span {
      display: flex;
      align-items: center;
      gap: 5px;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
  .info-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }
  svg {
    color: var(--color-principal);
  }
`;

const URL = "https://image.tmdb.org/t/p/w200";

const ItemUsuario = ({ item }) => {
  const { guardados, añadirGuardado } = useGuardados();
  const { favoritos, guardarFavorito } = useFavoritos();
  const { liked, saved, getCurrentInteraccion } = useCurrentInteraccion();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentInteraccion(item);
  }, [favoritos, guardados]);

  const handleFavorito = () => {
    guardarFavorito(item);
  };

  const handleGuardado = () => {
    añadirGuardado(item);
  };

  const handleNavigate = () => {
    navigate(`/detalle/${item.media}/${item.id}`);
  };

  return (
    <StyledItemUsuario>
      <div className="main-info" onClick={handleNavigate}>
        <div className="imagen-item">
          {item.imagen ? (
            <img src={`${URL}${item.imagen}`} alt="" />
          ) : (
            <FailedImage />
          )}
        </div>

        <div className="info-item">
          <h3>{item.titulo}</h3>
          <span>{item.subtitulo}</span>
          <p>{item.descripcion}</p>
        </div>
      </div>

      <span className="interaccion">
        {liked ? (
          <span onClick={handleFavorito}>
            <Icon icon="tabler:heart-filled" />
            quitar favorito
          </span>
        ) : (
          <span onClick={handleFavorito}>
            <Icon icon="tabler:heart" />
            añadir favorito
          </span>
        )}

        {saved ? (
          <span onClick={handleGuardado}>
            <Icon icon="tabler:bookmark-filled" />
            quitar guardado
          </span>
        ) : (
          <span onClick={handleGuardado}>
            <Icon icon="tabler:bookmark-plus" />
            añadir guardado
          </span>
        )}
      </span>
    </StyledItemUsuario>
  );
};

export default ItemUsuario;
