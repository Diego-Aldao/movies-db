import { useEffect, useState } from "react";
import ItemSection from "../ItemSection";
import { SwiperSlide } from "swiper/react";
import SectionPage from "../../SectionPage";
import useDetalle from "../../../hooks/useDetalle";

const IMAGENURL = "https://image.tmdb.org/t/p/w1280";

const breakpoints = {
  480: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 5,
  },
};

const Estrenos = () => {
  const [imagenEstreno, setImagenEstreno] = useState("");
  const { detalle, getDetalle } = useDetalle();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1&region=AR`;
    getDetalle(url);
  }, []);

  useEffect(() => {
    if (!detalle) return;
    setImagenEstreno(`${IMAGENURL}${detalle.results[0].poster_path}`);
  }, [detalle]);

  const handleMouseOver = (estreno) => {
    setImagenEstreno(`${IMAGENURL}${estreno.poster_path}`);
  };

  return (
    <>
      {detalle && (
        <SectionPage
          titulo={"estrenos"}
          currentBreakpoints={breakpoints}
          banner={imagenEstreno}
        >
          {detalle.results.map((estreno) => {
            const newEstreno = { ...estreno, media_type: "movie" };
            return (
              <SwiperSlide key={newEstreno.id}>
                <ItemSection
                  itemData={newEstreno}
                  mouseOver={() => {
                    handleMouseOver(estreno);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </SectionPage>
      )}
    </>
  );
};

export default Estrenos;
