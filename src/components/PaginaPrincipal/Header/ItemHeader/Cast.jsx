import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledCast = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  h2 {
    width: 100%;
    text-transform: capitalize;
    font-size: 20px;
    height: 30px;
  }
  .cast-item {
    flex: 1 1 calc(25% - 10px);
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    .cast-item-img {
      width: 63px;
      height: 63px;
      overflow: hidden;
      border-radius: 50%;
    }
    p {
      text-transform: capitalize;
      font-size: 12px;
    }
    .cast-item-nombre {
      font-size: 13px;
      color: var(--color-texto-principal);
    }
  }
`;

const Cast = ({ cast }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/detalle/person/${id}`);
  };

  return (
    <StyledCast data-swiper-parallax="-55%">
      <h2>cast</h2>
      {cast?.map((actor) => (
        <div
          className="cast-item"
          key={actor.id}
          onClick={() => {
            handleNavigate(actor.id);
          }}
        >
          <div className="cast-item-img">
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt="imagen de una celebridad"
            />
          </div>
          <p className="cast-item-nombre">{actor.name}</p>
          <p>{actor.character}</p>
        </div>
      ))}
    </StyledCast>
  );
};

export default Cast;
