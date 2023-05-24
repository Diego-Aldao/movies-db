import { useEffect } from "react";
import styled, { css } from "styled-components";
import useDetalle from "../../../hooks/useDetalle";
import imgPlaceholder from "../../../assets/image-placeholder.svg";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  width: 100%;
  ${({ bg }) =>
    bg
      ? css`
          background: ${({ bg }) => `url(${bg})`} no-repeat center / cover;
        `
      : css`
          background: ${({ failedImage }) => `url(${failedImage})`} no-repeat
            center / 50%;
        `}
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #0000009b;
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
  }
  p:first-letter {
    text-transform: uppercase;
  }
  p {
    max-width: 600px;
  }
  .descripcion,
  .lista {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
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

const StyledLink = styled(Link)`
  width: 50%;
  max-width: 200px;
  background: var(--color-principal);
  border: 1px solid var(--color-principal);
  padding-block: 15px;
  border-radius: 5px;
  text-align: center;
  span {
    color: var(--bg-secundario);
    text-transform: uppercase;
    font-size: clamp(12px, 2vw, 14px);
    font-weight: 800;
  }
`;

const Coleccion = ({ coleccion }) => {
  const { backdrop_path, name, id } = coleccion;
  const { detalle, getDetalle } = useDetalle();

  useEffect(() => {
    if (!id) return;
    const url = `https://api.themoviedb.org/3/collection/${id}?language=es-ES`;
    getDetalle(url);
  }, []);

  const backgroundImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <>
      {detalle && (
        <StyledSection bg={backgroundImage} failedImage={imgPlaceholder}>
          <div className="info-coleccion">
            <h2>{name}</h2>
            <p className="descripcion">{detalle.overview}</p>
            <p className="lista">
              incluye:
              {detalle.parts.map((part) => (
                <span key={part.id}> {part.title} - </span>
              ))}
            </p>
            <StyledLink to={`/coleccion/${id}`}>
              <span>ver la colección</span>
            </StyledLink>
          </div>
        </StyledSection>
      )}
    </>
  );
};

export default Coleccion;
