import styled from "styled-components";
import getPorcentaje from "../../helpers/getPorcentaje";
import { useNavigate } from "react-router-dom";
import { Circle } from "rc-progress";
import { departamentos } from "../../Utils/Traducciones.js";
import FailedImage from "../FailedImage";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  position: relative;
  height: 330px;
  background: var(--bg-secundario);
  .contenedor-img {
    position: relative;
    height: 70%;
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
      }
    }
  }
  p {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-texto-principal);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .info {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    height: 30%;
    gap: 5px;
  }
  span {
    font-size: 14px;
  }
  .fecha {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    .info {
      height: 96px;
      padding: 10px 15px;
    }
  }
`;

const IMAGENURL = "https://image.tmdb.org/t/p/w200";

const ItemSection = ({ itemData, mouseOver }) => {
  const navigate = useNavigate();

  const {
    known_for_department,
    media_type,
    profile_path,
    poster_path,
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
    id,
  } = itemData;

  const handleClick = () => {
    navigate(`/detalle/${media_type}/${id}`);
  };

  const not_actor = media_type !== "person";

  const path_imagen = profile_path || poster_path;

  const titulo_item = name || title;

  let tipoPersona = departamentos[known_for_department];

  const porcentaje = getPorcentaje(vote_average);

  const fecha = release_date || first_air_date;

  const fechaFormateada = new Date(fecha).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const colorPorcentaje =
    porcentaje === "-"
      ? "#a3a3a3"
      : porcentaje >= 75
      ? "#21d07a"
      : porcentaje >= 45
      ? "#d2d531"
      : "#db2360";

  return (
    <StyledItem onMouseOver={mouseOver} onClick={handleClick}>
      <div className="contenedor-img">
        {path_imagen ? (
          <img
            src={`${IMAGENURL}${path_imagen}`}
            alt="poster de pelicula o celebridad"
          />
        ) : (
          <FailedImage />
        )}
        {not_actor && (
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
        <p>{titulo_item}</p>
        {not_actor ? (
          <span className="fecha">{fechaFormateada}</span>
        ) : (
          <span>{tipoPersona}</span>
        )}
      </div>
    </StyledItem>
  );
};

export default ItemSection;
