import styled from "styled-components";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import BarraBusqueda from "./BarraBusqueda";
import { useState } from "react";

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
  .search {
    color: ${({ isVisible }) => (isVisible ? "var(--color-principal)" : "")};
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
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <StyledNav isVisible={isVisible}>
      <div className="contenedor-nav">
        <NavMobile handleClick={handleClick} isVisible={isVisible} />
        <NavDesktop handleClick={handleClick} isVisible={isVisible} />
      </div>
      <BarraBusqueda isVisible={isVisible} />
    </StyledNav>
  );
};

export default Navbar;
