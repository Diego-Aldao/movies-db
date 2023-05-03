import styled from "styled-components";
import { Icon } from "@iconify/react";
import getDuracion from "../../../../helpers/getDuracion";

const StyledMainInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  gap: 10px;
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

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    svg {
      width: 15px;
      height: 15px;
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
  }
`;

const MainInfo = ({ mainInfo }) => {
  return (
    <StyledMainInfo>
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
        <div className="actions">
          <Icon icon="ic:round-favorite-border" />
          <Icon icon="ic:outline-bookmark-added" display={"none"} />
          <Icon icon="ic:outline-share" />
          <Icon icon="ic:outline-bookmark-add" />
        </div>
      </StyledMovieData>
      <p>
        {mainInfo?.overview} <span>ver descripcion</span>
      </p>
    </StyledMainInfo>
  );
};

export default MainInfo;
