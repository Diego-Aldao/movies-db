import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  padding-block: 40px;
  h1:first-letter {
    text-transform: uppercase;
  }
  h1 {
    font-size: clamp(24px, 3.5vw, 32px);
    text-align: center;
  }
`;

const Header = ({ query }) => {
  return (
    <StyledHeader>
      <h1>resultados para &quot;{query}&quot;</h1>
    </StyledHeader>
  );
};

export default Header;
