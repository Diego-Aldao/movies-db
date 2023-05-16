import styled from "styled-components";
const StyledHeaderMobile = styled.header`
  width: 100%;
  background: ${({ background }) => `url(${background})`} no-repeat center /
    cover;
  margin-top: 50px;
  position: relative;
  padding: 10px;
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000000d3, #ffffff00);
    z-index: 0;
  }
  .poster {
    width: 25%;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const BannerMobile = ({ imagenes }) => {
  const { imagenBg, imagenPoster } = imagenes;
  const imagenBackground = `https://image.tmdb.org/t/p/w400/${imagenBg}`;

  return (
    <StyledHeaderMobile background={imagenBackground}>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w200/${imagenPoster}`} alt="" />
      </div>
    </StyledHeaderMobile>
  );
};

export default BannerMobile;
