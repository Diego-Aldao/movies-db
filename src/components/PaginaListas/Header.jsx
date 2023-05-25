import styled from "styled-components";
const StyledHeader = styled.header`
  padding-block: 20px;
  grid-column: 1 / 3;
  h2 {
    text-transform: capitalize;
    font-size: clamp(24px, 3.5vw, 32px);
    text-align: center;
  }
`;

const Header = ({ titulo, subCategoria }) => {
  const newTitulo = titulo.replaceAll("-", " ");
  return (
    <StyledHeader>
      <h2>{`${newTitulo} ${subCategoria}es`}</h2>
    </StyledHeader>
  );
};

export default Header;
