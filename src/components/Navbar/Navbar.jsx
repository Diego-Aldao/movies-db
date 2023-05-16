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
  z-index: 99;
  .contenedor-nav {
    padding-inline: 10px;
    height: 100%;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
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
    .iconos {
      display: flex;
      gap: 20px;
    }
  }
  @media (min-width: 1024px) {
    .contenedor-nav {
      padding-inline: 50px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <div className="contenedor-nav">
        <NavMobile />
        <NavDesktop />
      </div>
    </StyledNav>
  );
};

export default Navbar;
