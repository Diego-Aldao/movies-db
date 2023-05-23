import styled from "styled-components";
import { Icon } from "@iconify/react";
import getDuracion from "../../../../helpers/getDuracion";
import { useNavigate } from "react-router-dom";
import Interaccion from "../../../Interaccion";

const StyledMainInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  gap: 10px;
  position: relative;
  z-index: 999;
  p {
    max-height: 93px;
    overflow: hidden;
    position: relative;
    line-height: 1.5;
    span {
      position: absolute;
      display: block;
      bottom: -3px;
      right: 0px;
      width: 100%;
      text-align: right;
      background: linear-gradient(to right, #ffffff00, var(--bg-principal) 50%);
      text-transform: capitalize;
      font-style: italic;
      font-weight: 500;
      text-decoration: underline;
      padding-right: 5px;
    }
  }

  @media (min-width: 768px) {
    p {
      span {
        background: linear-gradient(
          to right,
          #ffffff00,
          var(--bg-principal) 90%
        );
      }
    }
  }
  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;

const StyledMovieData = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  gap: 15px;

  ul {
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
  }

  .calificacion {
    display: flex;
    align-items: center;
    svg {
      width: 15px;
      height: 15px;
      color: #ffe600;
      margin-top: 2px;
    }
    span:last-of-type {
      padding-top: 2px;
    }
    span:first-of-type {
      color: var(--color-texto-principal);
      font-size: clamp(14px, 2vw, 18px);
    }
    span {
      margin-inline: 5px;
    }
  }

  .interaccion {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    svg {
      width: 15px;
      height: 15px;
      color: var(--color-principal);
    }
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(3, auto);
    ul {
      justify-content: center !important;
      grid-column: 2 / 3;
      margin-right: auto;
    }
    .calificacion {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .interaccion {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const MainInfo = ({ mainInfo }) => {
  const navigate = useNavigate();

  //objeto para guardar en favoritos o guardados
  const objetoInteraccion = {
    imagen: mainInfo.poster_path || mainInfo.backdrop_path,
    titulo: mainInfo.title || mainInfo.name,
    descripcion: mainInfo.overview,
    subtitulo: mainInfo.first_air_date || mainInfo.release_date,
    id: mainInfo.id,
    media: "movie",
  };

  const handleNavigation = () => {
    navigate(`/detalle/movie/${mainInfo.id}`);
  };

  return (
    <StyledMainInfo data-swiper-parallax="-55%">
      <StyledMovieData>
        <ul className="lista-datos">
          <li className="año">
            <span>{mainInfo?.release_date?.split("-")[0]} |</span>
          </li>

          {mainInfo?.genres?.map((genero) => (
            <li className="genero" key={genero.id}>
              <span> · {genero.name}</span>
            </li>
          ))}
          <li className="duracion">
            <span>| {getDuracion(mainInfo.runtime)}</span>
          </li>
        </ul>
        <div className="calificacion">
          <Icon icon="ic:round-star" />
          <span>{mainInfo?.vote_average?.toFixed(1)}</span>
          <span>| {mainInfo?.vote_count}</span>
        </div>
        <Interaccion objetoInfo={objetoInteraccion} />
      </StyledMovieData>
      <p onClick={handleNavigation}>
        {mainInfo?.overview} <span>ver detalle</span>
      </p>
    </StyledMainInfo>
  );
};

export default MainInfo;
