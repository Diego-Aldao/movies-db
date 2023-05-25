import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Circle } from "rc-progress";
import FailedImage from "../FailedImage";
import getPorcentaje from "../../helpers/getPorcentaje";

const StyledItem = styled.div`
  display: flex;
  height: 45vw;
  background: var(--bg-secundario);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  .contenedor-img {
    width: 30%;
    position: relative;
    .porcentaje {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: -10px;
      left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-secundario);
      color: var(--color-texto-principal);
      border-radius: 50%;
      text-transform: uppercase;
      font-size: 12px;
      span {
        position: absolute;
        display: block;
      }
    }
    span {
      display: none;
    }
  }
  .info {
    width: 70%;
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 14px;
  }
  .titulo {
    color: var(--color-texto-principal);
  }
  .fecha {
    font-size: 12px;
    margin-top: 5px;
  }
  .descripcion {
    margin-top: 20px;
    position: relative;
    -webkit-line-clamp: auto;
    box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  .roles {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    p {
      text-overflow: ellipsis;
      font-size: 12px;
    }
    overflow: hidden;
    margin: 20px 0px 0px;
    span {
    }
  }
  @media (min-width: 645px) {
    flex-direction: column;
    height: auto;
    .contenedor-img {
      height: calc(100% - 96px);
    }

    .info {
      height: 96px;
      padding: 10px 15px;
      margin-top: 10px;
    }
    .contenedor-img,
    .info {
      width: 100%;
    }
    .descripcion {
      display: none;
    }

    .roles {
      margin-top: 5px;
    }
  }
`;

const ItemLista = ({ info }) => {
  const navigate = useNavigate();
  const {
    overview,
    poster_path,
    title,
    vote_average,
    release_date,
    profile_path,
    name,
    known_for,
    first_air_date,
    media_type,
    id,
  } = info;

  const titulo = title ? title : name;
  const path_imagen = poster_path ? poster_path : profile_path;
  const air_date = release_date ? release_date : first_air_date;

  const porcentaje = getPorcentaje(vote_average);

  const colorPorcentaje =
    porcentaje === "-"
      ? "#a3a3a3"
      : porcentaje >= 75
      ? "#21d07a"
      : porcentaje >= 45
      ? "#d2d531"
      : "#db2360";

  const handleClick = () => {
    navigate(`/detalle/${media_type}/${id}`);
  };

  return (
    <StyledItem onClick={handleClick}>
      <div className="contenedor-img">
        {path_imagen ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${path_imagen}`}
            alt="imagen de una pelicula, serie o celebridad"
          />
        ) : (
          <FailedImage />
        )}
        {vote_average && (
          <div className="porcentaje">
            <span>{porcentaje}</span>
            <Circle
              percent={porcentaje}
              strokeWidth={6}
              strokeColor={colorPorcentaje}
              trailWidth={3}
              trailColor={"#dfdfdf"}
            />
          </div>
        )}
      </div>
      <div className="info">
        <p className="titulo">{titulo}</p>
        {!known_for ? (
          <>
            <p className="fecha">{air_date}</p>
            <p className="descripcion">{overview}</p>
          </>
        ) : (
          <ul className="roles">
            {known_for.map((rol) => (
              <li key={rol.id}>
                <p>{rol.title ? rol.title : rol.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledItem>
  );
};

export default ItemLista;
