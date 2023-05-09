import styled from "styled-components";
const StyledHeader = styled.header`
  padding-block: 20px;
  grid-column: 1 / 3;
  h2 {
    text-transform: capitalize;
    font-size: clamp(24px, 3.5vw, 32px);
  }
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
