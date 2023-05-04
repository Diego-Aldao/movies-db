import styled from "styled-components";
import { Icon } from "@iconify/react";
import Logo from "../Logo";

const StyledNavMobile = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMobile = () => {
  return (
    <StyledNavMobile>
      <Icon icon="fluent:navigation-16-filled" className="hamburguesa" />
      <Logo />
      <div className="iconos">
        <Icon icon="tabler:search" />
        <Icon icon="tabler:user" />
        <Icon icon="tabler:heart" />
        <Icon icon="tabler:bookmark" />
      </div>
    </StyledNavMobile>
  );
};

export default NavMobile;
