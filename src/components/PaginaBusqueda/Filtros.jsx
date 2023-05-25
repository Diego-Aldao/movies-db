import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledFiltros = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-block: 20px;
  max-width: 500px;
  span {
    flex: 1 1 auto;
    text-align: center;
    text-transform: capitalize;
    color: var(--color-texto-principal);
    font-weight: 600;
    cursor: pointer;
  }
  span:hover {
    color: var(--color-principal);
  }
`;

const ItemFiltro = ({ valor, nombre, handleClick, total }) => {
  return (
    <span
      onClick={() => {
        handleClick(valor);
      }}
    >
      ver {nombre} {total}
    </span>
  );
};

const Filtros = ({ total, query }) => {
  const navigate = useNavigate();

  const handleClick = (valor) => {
    navigate(`/busqueda/${valor}/${query}`);
  };

  return (
    <StyledFiltros>
      <ItemFiltro
        valor={"multi"}
        nombre={"todos"}
        handleClick={handleClick}
        total={total}
      />
      <ItemFiltro
        valor={"movie"}
        nombre={"peliculas"}
        handleClick={handleClick}
      />
      <ItemFiltro valor={"tv"} nombre={"series"} handleClick={handleClick} />
      <ItemFiltro
        valor={"person"}
        nombre={"personas"}
        handleClick={handleClick}
      />
    </StyledFiltros>
  );
};

export default Filtros;
