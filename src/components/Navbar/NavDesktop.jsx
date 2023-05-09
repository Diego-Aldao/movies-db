import styled from "styled-components";
import Logo from "../Logo";
import { Icon } from "@iconify/react";
import Link from "./Link";

const StyledNavDesktop = styled.nav`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 30px;
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

const NavDesktop = () => {
  return (
    <StyledNavDesktop>
      <Logo />
      <div className="links">
        <Link
          navigateTo={{
            categoria: "movie",
            subCategoria: "popular",
            titulo: "peliculas",
          }}
        />
        <Link
          navigateTo={{
            categoria: "tv",
            subCategoria: "popular",
            titulo: "programas-de-television",
          }}
        />
        <Link
          navigateTo={{
            categoria: "person",
            subCategoria: "popular",
            titulo: "celebridades",
          }}
        />
      </div>
      <div className="iconos">
        <Icon icon="tabler:search" />
        <Icon icon="tabler:user" />
        <Icon icon="tabler:heart" />
        <Icon icon="tabler:bookmark" />
      </div>
    </StyledNavDesktop>
  );
};

export default NavDesktop;
