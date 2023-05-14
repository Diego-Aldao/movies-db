import styled from "styled-components";
import getPorcentaje from "../../helpers/getPorcentaje";
import { useNavigate } from "react-router-dom";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  position: relative;
  height: 100%;
  p {
    font-size: 14px;
    font-weight: 600;
    margin-top: 15px;
    padding-inline: 5px;
    color: var(--color-texto-principal);
  }
  span {
    font-size: 14px;
    padding-inline: 5px;
  }
  .contenedor-img {
    position: relative;
    span {
      position: absolute;
      bottom: -10px;
      left: 5px;
      background: var(--bg-secundario);
      color: var(--color-texto-principal);
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      border-radius: 50%;
      border: 2px solid var(--color-texto-principal);
      text-transform: uppercase;
      font-size: 12px;
    }
  }
`;

const IMAGENURL = "https://image.tmdb.org/t/p/w200";

const ItemSection = ({ itemData, mouseOver }) => {
  const navigate = useNavigate();

  const {
    known_for_department,
    gender,
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

  const path_imagen = media_type == "person" ? profile_path : poster_path;

  const titulo_item = name ? name : title;

  const departamentos = {
    Acting: "Actor",
    Actors: "Actores",
    Art: "Arte",
    Camera: "Cámara",
    "Costume & Make-Up": "Vestuario y maquillaje",
    Creator: "Creador",
    Crew: "Equipo",
    Directing: "Dirección",
    Editing: "Edición",
    Lighting: "Iluminación",
    Production: "Producción",
    Sound: "Sonido",
    "Visual Effects": "Efectos visuales",
    Writing: "Guion",
  };
  let tipoPersona = departamentos[known_for_department];

  if (tipoPersona === "Actor" && gender == 1) {
    tipoPersona = "Actriz";
  }

  return (
    <StyledItem onMouseOver={mouseOver} onClick={handleClick}>
      <div className="contenedor-img">
        <img
          src={`${IMAGENURL}${path_imagen}`}
          alt="poster de pelicula o celebridad en tendencia"
        />
        {not_actor && <span>{getPorcentaje(vote_average)}</span>}
      </div>
      <p>{titulo_item}</p>
      {not_actor ? (
        <span>{release_date ? release_date : first_air_date}</span>
      ) : (
        <span>{tipoPersona}</span>
      )}
    </StyledItem>
  );
};

export default ItemSection;
