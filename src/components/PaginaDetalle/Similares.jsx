import dataSimilar from "../../mocks/SimilarPelicula.json";
import SectionInitialPage from "../PaginaPrincipal/SectionInitialPage";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";
import getPorcentaje from "../../helpers/getPorcentaje";

const StyledSection = styled(SectionInitialPage)`
  padding: 0px;
  .imagen-similares {
    border-radius: 10px;
    overflow: hidden;
  }
  .info-similares {
    display: flex;
    justify-content: space-between;
    padding-block: 10px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      width: 75%;
      font-size: clamp(14px, 2vw, 16px);
    }
  }
  @media (min-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const breakpoints = {
  200: {
    slidesPerView: 1.2,
  },
  480: {
    slidesPerView: 2.5,
  },
  768: {
    slidesPerView: 3.5,
  },
  1024: {
    slidesPerView: 3.5,
  },
};

const Similares = (/* {idPelicula} */) => {
  const similares = dataSimilar.results
    .filter((result) => result.backdrop_path !== null)
    .slice(0, 10);
  console.log(similares);
  return (
    <StyledSection titulo={"similares"} currentBreakpoints={breakpoints}>
      {similares.map(
        ({ id, backdrop_path, poster_path, title, vote_average }) => (
          <SwiperSlide key={id}>
            <div className="imagen-similares">
              <img
                src={`https://image.tmdb.org/t/p/w300/${
                  backdrop_path ? backdrop_path : poster_path
                }`}
                alt=""
              />
            </div>
            <div className="info-similares">
              <p>{title}</p>
              {vote_average ? (
                <span>{getPorcentaje(vote_average)}%</span>
              ) : (
                <span>s/n</span>
              )}
            </div>
          </SwiperSlide>
        )
      )}
    </StyledSection>
  );
};

export default Similares;
