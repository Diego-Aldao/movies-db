import styled from "styled-components";
import { useEffect, useState } from "react";
import Cast from "./Cast";
import MainInfo from "./MainInfo";
import { useNavigate } from "react-router-dom";
import useDetalle from "../../../../hooks/useDetalle";

const StyledHeader = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 2;
  height: 75vh;
  min-height: 750px;
  display: flex;
  align-items: flex-end;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0px;
    bottom: -2px;
    background: linear-gradient(to bottom, #ffffff00, var(--bg-principal) 70%);
  }
  @media (min-width: 1024px) {
    &:after {
      background: linear-gradient(
        to bottom,
        #ffffff00,
        var(--bg-principal) 110%
      );
    }
    min-height: 85vh;
  }
  .banner {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    min-height: 500px;
    img {
      object-position: 50% 0%;
    }
  }
`;

const StyledInfo = styled.div`
  position: relative;
  padding: 0px 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 2;
  gap: 15px;
  max-width: 1600px;
  margin: 0 auto;

  h1 {
    font-size: clamp(24px, 6vw, 60px);
    text-align: center;
  }
  @media (min-width: 768px) {
    padding: 0px 24px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1.3fr 1fr;
    column-gap: 50px;
    row-gap: 0px;
    padding: 0px 50px;
    h1 {
      text-align: left;
      grid-column: 1 / 3;
    }
  }
`;

const ItemHeader = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [mainInfo, setMainInfo] = useState({});
  const { detalle, getDetalle } = useDetalle();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits&language=es-ES`;
    getDetalle(url);
  }, [movieId]);

  useEffect(() => {
    if (!detalle) return;
    setMainInfo(detalle);
    setCast(detalle.credits.cast.slice(0, 4));
  }, [detalle]);

  const handleClick = () => {
    const media_type = "movie";
    navigate(`/detalle/${media_type}/${mainInfo.id}`);
  };

  return (
    <>
      {detalle && (
        <StyledHeader onClick={handleClick}>
          <div
            className="banner"
            data-swiper-parallax="75%"
            data-swiper-parallax-scale="1.10"
          >
            <picture>
              <source
                srcSet={`https://image.tmdb.org/t/p/w500${mainInfo?.poster_path}`}
                media="(max-width: 580px)"
              />
              <source
                srcSet={`https://image.tmdb.org/t/p/w500${mainInfo?.backdrop_path}`}
                media="(max-width: 1024px)"
              />
              <img
                src={`https://image.tmdb.org/t/p/w1280${mainInfo?.backdrop_path}`}
                alt=""
              />
            </picture>
          </div>
          <StyledInfo>
            <h1 data-swiper-parallax="-55%">{mainInfo?.title}</h1>
            <MainInfo mainInfo={mainInfo} />
            <Cast cast={cast} />
          </StyledInfo>
        </StyledHeader>
      )}
    </>
  );
};

export default ItemHeader;
