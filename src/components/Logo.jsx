import styled from "styled-components";

const StyledLogo = styled.span`
  font-weight: 700;
  font-size: clamp(20px, 3vw, 32px);
  color: var(--color-texto-principal);
  color: var(--color-principal);
  background: var(--gradiente);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Logo = () => {
  return <StyledLogo>Nyxaster</StyledLogo>;
};

export default Logo;