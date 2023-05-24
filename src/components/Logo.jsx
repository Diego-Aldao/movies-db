import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  font-weight: 700;
  font-size: clamp(20px, 3vw, 32px);
  color: var(--color-texto-principal);
  color: var(--color-principal);
  background: var(--gradiente);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
`;

const Logo = () => {
  return <StyledLogo to="/">movieVerse</StyledLogo>;
};

export default Logo;
