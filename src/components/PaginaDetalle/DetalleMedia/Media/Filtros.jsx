import styled from "styled-components";

const StyledFiltros = styled.ul`
  display: flex;
  gap: 20px;
  li {
    color: var(--color-texto-principal);
    text-transform: capitalize;
    cursor: pointer;
  }
  span {
    text-transform: capitalize;
    font-size: 14px;
  }
`;

const Filtros = ({ filtros, setCurrentMedia }) => {
  const handleClick = (item) => {
    setCurrentMedia(item);
  };

  return (
    <StyledFiltros>
      {filtros.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            handleClick(item);
          }}
        >
          {item.nombre} <span>{item.data.length}</span>
        </li>
      ))}
    </StyledFiltros>
  );
};

export default Filtros;
