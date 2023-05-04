import styled from "styled-components";

import { useEffect, useState } from "react";
import Cast from "./Cast";
import MainInfo from "./MainInfo";

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

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=es-ES`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMainInfo(data));
  }, [movieId]);

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCast(data.cast.slice(0, 4)));
  }, [movieId]);

  return (
    <StyledHeader>
      <div
        className="banner"
        data-swiper-parallax="75%"
        data-swiper-parallax-scale="1.10"
      >
        <picture>
          <source
            srcSet={`https://image.tmdb.org/t/p/original/${mainInfo?.poster_path}`}
            media="(max-width: 580px)"
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${mainInfo?.backdrop_path}`}
            alt=""
          />
        </picture>
      </div>
      <StyledInfo>
        <h1>{mainInfo?.title}</h1>
        <MainInfo mainInfo={mainInfo} />
        <Cast cast={cast} />
      </StyledInfo>
    </StyledHeader>
  );
};

export default ItemHeader;
