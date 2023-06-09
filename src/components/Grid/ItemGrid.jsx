import styled from "styled-components";
import { departamentos } from "../../Utils/Traducciones";
import { useNavigate } from "react-router-dom";
import FailedImage from "../FailedImage";
import getFecha from "../../helpers/getFecha";

export const StyledItem = styled.div`
  width: 100%;
  background: var(--bg-secundario);
  display: flex;
  height: 140px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  .imagen-item {
    overflow: hidden;
    width: 93.33px;
    img {
      object-fit: contain;
    }
  }
  .info-item {
    display: flex;
    flex: 1 1 70%;
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
  h3 {
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: -webkit-box;
    line-clamp: 3;
    margin-top: 15px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }
`;

const URL = "https://image.tmdb.org/t/p/w200";

const ItemGrid = ({ data, propsMedia }) => {
  const navigate = useNavigate();
  const {
    known_for,
    profile_path,
    poster_path,
    name,
    title,
    known_for_department,
    release_date,
    overview,
    media_type,
    id,
    first_air_date,
  } = data;

  const roles = known_for?.map((rol) => rol.title).join(", ");

  const imagen = profile_path || poster_path;

  const titulo = name || title;

  const fecha = release_date || first_air_date;

  const fechaFormateada = getFecha(fecha);

  const subtitulo = departamentos[known_for_department] || fechaFormateada;

  const descripcion = overview || roles;

  const media = media_type || propsMedia;

  const handleClick = () => {
    navigate(`/detalle/${media}/${id}`);
  };

  return (
    <StyledItem key={data.id} onClick={handleClick}>
      <div className="imagen-item">
        {imagen ? (
          <img
            src={`${URL}${imagen}`}
            alt="poster de una pelicula, serie o celebridad"
          />
        ) : (
          <FailedImage />
        )}
      </div>
      <div className="info-item">
        <h3>{titulo}</h3>
        <span>{subtitulo}</span>
        <p>{descripcion}</p>
      </div>
    </StyledItem>
  );
};

export default ItemGrid;
