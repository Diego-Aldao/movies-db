import styled from "styled-components";
import DataColeccion from "../../mocks/ColeccionPelicula.json";

const StyledSection = styled.section`
  width: 100%;
  background: ${({ bg }) => `url(${bg})`} no-repeat center / cover;
  height: 258px;
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #000000b0;
  }
  .info-coleccion {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    h2 {
      font-size: 30px;
    }
    button {
      width: 50%;
      max-width: 200px;
      background: var(--bg-secundario);
      border: 1px solid var(--bg-secundario);
      padding-block: 15px;
      span {
        color: var(--color-principal);
        text-transform: uppercase;
        font-size: clamp(12px, 2vw, 14px);
        font-weight: 700;
      }
    }
  }
  p:first-letter {
    text-transform: capitalize;
  }
  p {
    max-width: 600px;
  }
  p,
  span {
    font-weight: 500;
    color: var(--color-texto-principal);
  }
  @media (min-width: 768px) {
    padding-inline: 20px;
    border-radius: 15px;
    overflow: hidden;
  }
  @media (min-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const Coleccion = ({ coleccion }) => {
  if (!coleccion) return;
  const { parts } = DataColeccion;
  const { backdrop_path, name } = coleccion;
  return (
    <StyledSection bg={`https://image.tmdb.org/t/p/w500${backdrop_path}`}>
      <div className="info-coleccion">
        <h2>{name}</h2>
        <p>
          incluye:{" "}
          {parts.map((part) => (
            <span key={part.id}>{part.title}, </span>
          ))}
        </p>
        <button>
          <span>ver la colección</span>
        </button>
      </div>
    </StyledSection>
  );
};

export default Coleccion;
