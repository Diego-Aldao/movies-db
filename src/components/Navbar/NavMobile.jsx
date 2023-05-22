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

const NavMobile = ({
  handleClick,
  hayFavoritos,
  hayGuardados,
  handleNavigation,
  setModalIsVisible,
}) => {
  const handleVisible = () => {
    setModalIsVisible((prevState) => !prevState);
  };

  return (
    <StyledNavMobile>
      <Icon
        icon="fluent:navigation-16-filled"
        className="hamburguesa"
        onClick={handleVisible}
      />
      <Logo />
      <div className="iconos">
        <Icon icon="tabler:search" onClick={handleClick} className="search" />
        <Icon icon="tabler:user" onClick={handleNavigation} />
        {hayFavoritos ? (
          <span className="contador">
            <span>{hayFavoritos}</span>
            <Icon icon="tabler:heart-filled" />
          </span>
        ) : (
          <Icon icon="tabler:heart" />
        )}
        {hayGuardados ? (
          <span className="contador">
            <span>{hayGuardados}</span>
            <Icon icon="tabler:bookmark-filled" />
          </span>
        ) : (
          <Icon icon="tabler:bookmark" />
        )}
      </div>
    </StyledNavMobile>
  );
};

export default NavMobile;
