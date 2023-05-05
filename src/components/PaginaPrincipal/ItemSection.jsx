import styled from "styled-components";
import getPorcentaje from "../../helpers/getPorcentaje";

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
  } = itemData;

  const not_actor = media_type !== "person";

  const path_imagen = media_type == "person" ? profile_path : poster_path;

  const titulo_item = name ? name : title;

  let tipo_persona;
  if (known_for_department === "Acting" && gender == 1) {
    tipo_persona = "Actriz";
  } else if (known_for_department === "Acting" && gender == 2) {
    tipo_persona = "Actor";
  } else if (known_for_department === "Directing" && gender == 1) {
    tipo_persona = "Directora";
  } else {
    tipo_persona = "Director";
  }

  return (
    <StyledItem onMouseOver={mouseOver}>
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
        <span>{tipo_persona}</span>
      )}
    </StyledItem>
  );
};

export default ItemSection;
