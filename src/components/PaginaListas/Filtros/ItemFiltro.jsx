import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";

export const StyledFiltro = styled.div`
  background: var(--bg-secundario);
  border-radius: 5px;
  align-self: start;
  width: 100%;
  h3 {
    padding: 10px 15px;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    width: 100%;

    svg {
      width: 25px;
      height: 25px;
    }
  }
  .orden,
  .generos {
    border-block: 2px solid var(--bg-principal);
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    padding: 10px 15px;
    gap: 15px;
    p:first-letter {
      text-transform: uppercase;
    }
  }
  .orden {
    flex-direction: column;
    select {
      padding: 10px;
    }
  }
  .generos {
    flex-wrap: wrap;
    p {
      width: 100%;
    }
    span {
      border-radius: 15px;
      font-size: 14px;
      padding: 5px 10px;
      border: 1px solid var(--color-texto-terciario);
    }
  }
  @media (min-width: 645px) {
    width: calc(50% - 10px);
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const ItemFiltro = ({ generos, setFiltros, filtros }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentGeneros, setCurrentGeneros] = useState([]);

  const handleClick = (id) => {
    if (currentGeneros.some((filtro) => filtro === id)) {
      const newgeneros = currentGeneros.filter((filtro) => filtro !== id);
      setCurrentGeneros(newgeneros);
    } else {
      setCurrentGeneros([...currentGeneros, id]);
    }
  };

  useEffect(() => {
    let querysgeneros =
      currentGeneros.length >= 1 ? `&with_genres=${currentGeneros}` : "";
    setFiltros({ ...filtros, generos: querysgeneros, pagina: 1 });
  }, [currentGeneros]);

  return (
    <StyledFiltro isVisible={isVisible}>
      <h3
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        filtrar
        {isVisible ? (
          <Icon icon="mdi:chevron-down" />
        ) : (
          <Icon icon="mdi:chevron-right" />
        )}
      </h3>
      {generos && (
        <div className="generos">
          <p className="subtitulo">generos</p>
          {generos.map((filtro) => (
            <span
              key={filtro.id}
              onClick={() => {
                handleClick(filtro.id);
              }}
            >
              {filtro.name}
            </span>
          ))}
        </div>
      )}
    </StyledFiltro>
  );
};

export default ItemFiltro;
