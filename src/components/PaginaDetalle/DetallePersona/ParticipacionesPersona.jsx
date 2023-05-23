import { SwiperSlide } from "swiper/react";
import SectionInitialPage from "../../SectionPage";
import comparar from "../../../helpers/getComparacion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSection = styled(SectionInitialPage)`
  margin: 0px;
  padding: 0px;
  .swiper {
    height: auto !important; //la unica manera de sobreescribir esta propiedad del swiper
  }
  header {
    margin: 0px;
    padding-block: 20px;
  }
`;

const breakpoints = {
  480: {
    slidesPerView: 3.85,
  },
  768: {
    slidesPerView: 4.9,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 6.3,
  },
  1240: {
    slidesPerView: 6.3,
  },
};

const ParticipacionesPersona = ({ data }) => {
  const { cast } = data;
  const navigate = useNavigate();

  const URL = "https://image.tmdb.org/t/p/w200";

  //ordeno las participaciones de mayor popularidad a menor
  const participacionesPrincipales = cast.sort((a, b) =>
    comparar(a.popularity, b.popularity)
  );

  //filtro los talkshows y los items sin descripcion y me quedo con los primeros 10 resultados
  const participacionesFiltradas = participacionesPrincipales
    .filter((participacion) => {
      return (
        !participacion.genre_ids.includes(10767) &&
        !participacion.genre_ids.includes(10763) &&
        participacion.overview
      );
    })
    .slice(0, 10);

  const handleClick = (participacion) => {
    const { media_type, id } = participacion;
    navigate(`/detalle/${media_type}/${id}`);
  };

  return (
    <StyledSection titulo={"conocido por"} currentBreakpoints={breakpoints}>
      {participacionesFiltradas.map((participacion, index) => (
        <SwiperSlide
          key={index}
          onClick={() => {
            handleClick(participacion);
          }}
        >
          <div>
            <img src={`${URL}${participacion.poster_path}`} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </StyledSection>
  );
};

export default ParticipacionesPersona;
