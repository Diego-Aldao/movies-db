import { Icon } from "@iconify/react";
import styled from "styled-components";
import Interaccion from "../../../../Interaccion";

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
`;

const UsersInfo = ({ userInfo }) => {
  const { vote_average, vote_count } = userInfo;

  const votoFixed = vote_average.toFixed(1);

  const objetoInteraccion = {
    imagen: userInfo.poster_path || userInfo.backdrop_path,
    titulo: userInfo.title || userInfo.name,
    descripcion: userInfo.overview,
    subtitulo: userInfo.first_air_date || userInfo.release_date,
    id: userInfo.id,
    media: userInfo.media_type,
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
      <Interaccion objetoInfo={objetoInteraccion} />
    </StyledUsersInfo>
  );
};

export default UsersInfo;
