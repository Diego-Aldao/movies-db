import { Icon } from "@iconify/react";
import styled from "styled-components";
import useFavoritos from "../../../../../hooks/useFavoritos";
import useGuardados from "../../../../../hooks/useGuardados";
import useCurrentInteraccion from "../../../../../hooks/useCurrentInteraccion";
import { useEffect } from "react";

const StyledUsersInfo = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
  .valoracion {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      color: #ffd900;
    }
  }
  .interaccion {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      color: var(--color-principal);
      cursor: pointer;
    }
  }
`;

const UsersInfo = ({ userInfo }) => {
  const { vote_average, vote_count } = userInfo;
  const { favoritos, guardarFavorito } = useFavoritos();
  const { guardados, añadirGuardado } = useGuardados();
  const { liked, saved, getCurrentInteraccion } = useCurrentInteraccion();

  useEffect(() => {
    getCurrentInteraccion(userInfo);
  }, [favoritos, guardados]);

  const votoFixed = vote_average.toFixed(1);

  const handleClick = (tipo) => {
    const objetoGuardado = {
      imagen: userInfo.poster_path || userInfo.backdrop_path,
      titulo: userInfo.title || userInfo.name,
      descripcion: userInfo.overview,
      subtitulo: userInfo.first_air_date || userInfo.release_date,
      id: userInfo.id,
      media: userInfo.media_type,
    };
    if (tipo === "favoritos") {
      guardarFavorito(objetoGuardado);
    } else if (tipo === "guardados") {
      añadirGuardado(objetoGuardado);
    }
  };

  return (
    <StyledUsersInfo>
      {votoFixed >= 1 && (
        <div className="valoracion">
          <Icon icon="ic:round-star" />
          <span>{votoFixed}</span>
          <span>| {vote_count}</span>
        </div>
      )}
      <div className="interaccion">
        {liked ? (
          <Icon
            icon="tabler:heart-filled"
            onClick={() => {
              handleClick("favoritos");
            }}
          />
        ) : (
          <Icon
            icon="tabler:heart"
            onClick={() => {
              handleClick("favoritos");
            }}
          />
        )}

        {saved ? (
          <Icon
            icon="tabler:bookmark-filled"
            onClick={() => {
              handleClick("guardados");
            }}
          />
        ) : (
          <Icon
            icon="tabler:bookmark-plus"
            onClick={() => {
              handleClick("guardados");
            }}
          />
        )}
      </div>
    </StyledUsersInfo>
  );
};

export default UsersInfo;
