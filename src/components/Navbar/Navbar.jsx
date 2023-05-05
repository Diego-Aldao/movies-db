import styled from "styled-components";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  left: 0px;
  background: var(--bg-principal);
  padding-inline: 10px;
  z-index: 99;
  svg {
    width: 25px;
    height: 25px;
    color: var(--color-texto-principal);
  }
  .iconos {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 10px;
  }
  @media (min-width: 768px) {
    padding: 0px 24px;
    .iconos {
      display: flex;
      gap: 20px;
    }
  }
  @media (min-width: 1024px) {
    padding: 0px 50px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <NavMobile />
      <NavDesktop />
    </StyledNav>
  );
};

export default Navbar;
