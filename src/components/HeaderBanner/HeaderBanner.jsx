import styled from "styled-components";
import HeaderBannerMobile from "./HeaderBannerMobile";

const StyledHeader = styled.header`
  @media (min-width: 768px) {
    background: ${({ background }) => `url(${background})`} no-repeat 50% 0% /
      cover;
    position: relative;
    width: 100%;
    padding-bottom: 50px;
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #000000d5, #00000061 20%);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }
`;

const HeaderBanner = ({ imagenes, children }) => {
  const { imagenBg, imagenPoster } = imagenes;
  const backgroundHeader = `https://image.tmdb.org/t/p/w500${
    imagenBg || imagenPoster
  }`;

  return (
    <StyledHeader background={backgroundHeader}>
      <HeaderBannerMobile imagenes={imagenes} />
      {children}
    </StyledHeader>
  );
};

export default HeaderBanner;
