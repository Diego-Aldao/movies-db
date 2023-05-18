import styled from "styled-components";
import BannerMobile from "./BannerMobile";
import InfoHeader from "./InfoHeader/InfoHeader";

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

const Header = ({ data }) => {
  const { backdrop_path, poster_path } = data;
  const backgroundHeader = `https://image.tmdb.org/t/p/w500/${
    backdrop_path ? backdrop_path : poster_path
  }`;
  return (
    <StyledHeader background={backgroundHeader}>
      <BannerMobile
        imagenes={{ imagenBg: backdrop_path, imagenPoster: poster_path }}
      />
      <InfoHeader dataInfo={data} />
    </StyledHeader>
  );
};

export default Header;
