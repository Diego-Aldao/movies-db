import { SwiperSlide } from "swiper/react";
import Filtros from "./Filtros";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Videos from "./Videos";
import Imagenes from "./Imagenes";
import SectionPage from "../../../SectionPage";
import useDetalle from "../../../../hooks/useDetalle";

const StyledSection = styled(SectionPage)`
  padding: 0px;
  margin-top: 0px;
  max-width: 100%;
  .swiper {
    height: auto !important; //la unica manera de sobreescribir esta propiedad del swiper
  }
  header {
    padding: 0px;
  }
  .contenedor-img {
    overflow: hidden;
    min-height: 140px;
    max-height: 300px;
  }
  @media (min-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const Media = ({ mediaType, idMedia }) => {
  const { detalle, getDetalle } = useDetalle();
  const [media, setMedia] = useState();
  const [filtros, setFiltros] = useState();
  const [currentMedia, setCurrentMedia] = useState();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${mediaType}/${idMedia}?append_to_response=images,videos`;
    getDetalle(url);
  }, []);

  useEffect(() => {
    if (!detalle) return;
    const imagenes = detalle.images;
    const videos = detalle.videos;
    setMedia({ imagenes, videos });

    const dataFiltros = [
      {
        nombre: "wallpapers",
        data: imagenes.backdrops,
      },
      {
        nombre: "posters",
        data: imagenes.posters,
      },
      {
        nombre: "videos",
        data: videos.results,
      },
    ];
    setFiltros(dataFiltros);
    setCurrentMedia(dataFiltros[0]);
  }, [detalle]);

  const breakpoints = {
    200: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 3.7,
    },
    768: {
      slidesPerView: 3.1,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 15,
    },
  };

  return (
    <>
      {media ? (
        <StyledSection
          currentSpace={1}
          titulo={"media"}
          filtros={
            <Filtros filtros={filtros} setCurrentMedia={setCurrentMedia} />
          }
          currentBreakpoints={breakpoints}
        >
          {currentMedia.data.slice(0, 10).map((item, index) => (
            <SwiperSlide key={index}>
              {currentMedia.nombre === "videos" ? (
                <Videos data={item} />
              ) : (
                <Imagenes data={item} />
              )}
            </SwiperSlide>
          ))}
        </StyledSection>
      ) : (
        <></>
      )}
    </>
  );
};

export default Media;
