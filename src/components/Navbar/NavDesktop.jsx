import styled from "styled-components";
import Logo from "../Logo";
import { Icon } from "@iconify/react";
import NavLink from "./NavLink";

const StyledNavDesktop = styled.nav`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 30px;
  a {
    padding-bottom: 5px;
  }
  .links {
    display: flex;
    gap: 20px;
    span {
      color: var(--color-texto-principal);
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 800;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    display: flex;
    gap: 50px;
    .links {
      gap: 30px;
    }
  }
`;

const NavDesktop = ({
  handleClick,
  hayFavoritos,
  hayGuardados,
  handleNavigation,
}) => {
  return (
    <StyledNavDesktop>
      <Logo />
      <div className="links">
        <NavLink
          navigateTo={{
            categoria: "movie",
            subCategoria: "popular",
            titulo: "películas",
          }}
        />
        <NavLink
          navigateTo={{
            categoria: "tv",
            subCategoria: "popular",
            titulo: "programas-de-televisión",
          }}
        />
        <NavLink
          navigateTo={{
            categoria: "person",
            subCategoria: "popular",
            titulo: "celebridades",
          }}
        />
      </div>
      <div className="iconos">
        <Icon icon="tabler:search" onClick={handleClick} className="search" />
        <Icon icon="tabler:user" onClick={handleNavigation} />
        {hayFavoritos ? (
          <span className="contador">
            <span>{hayFavoritos}</span>
            <Icon icon="tabler:heart-filled" onClick={handleNavigation} />
          </span>
        ) : (
          <Icon icon="tabler:heart" onClick={handleNavigation} />
        )}
        {hayGuardados ? (
          <span className="contador">
            <span>{hayGuardados}</span>
            <Icon icon="tabler:bookmark-filled" onClick={handleNavigation} />
          </span>
        ) : (
          <Icon icon="tabler:bookmark" onClick={handleNavigation} />
        )}
      </div>
    </StyledNavDesktop>
  );
};

export default NavDesktop;
