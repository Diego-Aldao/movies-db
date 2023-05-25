import styled from "styled-components";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import BarraBusqueda from "./BarraBusqueda";
import { useState } from "react";
import useGuardados from "../../hooks/useGuardados";
import useFavoritos from "../../hooks/useFavoritos";
import { useNavigate } from "react-router-dom";
import ModalMobile from "./ModalMobile";

const StyledNav = styled.div`
  width: 100%;
  height: 80px;
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
    svg {
      cursor: pointer;
    }
    svg:hover {
      color: var(--color-principal);
    }
  }

  .contador {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    span {
      position: absolute;
      top: -10px;
      font-weight: 800;
      right: -5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;

      color: var(--color-principal);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      color: var(--color-principal);
    }
  }
  @media (min-width: 768px) {
    .contenedor-nav {
      padding-inline: 24px;
    }
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
  const navigate = useNavigate();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const { favoritos } = useFavoritos();
  const { guardados } = useGuardados();

  const hayFavoritos = favoritos.length;
  const hayGuardados = guardados.length;

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleNavigation = () => {
    navigate(`/usuario`);
  };

  return (
    <StyledNav isVisible={isVisible}>
      <div className="contenedor-nav">
        <NavMobile
          handleClick={handleClick}
          isVisible={isVisible}
          hayFavoritos={hayFavoritos}
          hayGuardados={hayGuardados}
          handleNavigation={handleNavigation}
          setModalIsVisible={setModalIsVisible}
        />
        <NavDesktop
          handleClick={handleClick}
          isVisible={isVisible}
          hayFavoritos={hayFavoritos}
          hayGuardados={hayGuardados}
          handleNavigation={handleNavigation}
        />
      </div>
      <BarraBusqueda isVisible={isVisible} />
      <ModalMobile
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
    </StyledNav>
  );
};

export default Navbar;
