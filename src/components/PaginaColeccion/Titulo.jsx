import styled from "styled-components";

const StyledTitulo = styled.h2`
  width: 100%;
  padding-block: 20px;
`;

const Titulo = ({ cantidad }) => {
  return <StyledTitulo>{`${cantidad} películas`}</StyledTitulo>;
};

export default Titulo;
