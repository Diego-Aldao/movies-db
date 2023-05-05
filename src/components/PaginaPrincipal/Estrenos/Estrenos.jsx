import { useEffect, useState } from "react";
import SectionInitialPage from "../SectionInitialPage";
import ItemSection from "../ItemSection";
import { SwiperSlide } from "swiper/react";

const KEY = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=es-ES&page=1&region=AR`;
const IMAGENURL = "https://image.tmdb.org/t/p/original";

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
  const [estrenos, setEstrenos] = useState();
  const [imagenEstreno, setImagenEstreno] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setEstrenos(data.results));
  }, []);

  useEffect(() => {
    if (!estrenos) return;
    setImagenEstreno(`${IMAGENURL}${estrenos[0].poster_path}`);
  }, [estrenos]);

  const handleMouseOver = (estreno) => {
    setImagenEstreno(`${IMAGENURL}${estreno.poster_path}`);
  };
  return (
    <SectionInitialPage
      titulo={"estrenos"}
      currentBreakpoints={breakpoints}
      banner={imagenEstreno}
    >
      {estrenos?.map((estreno) => (
        <SwiperSlide key={estreno.id}>
          <ItemSection
            itemData={estreno}
            mouseOver={() => {
              handleMouseOver(estreno);
            }}
          />
        </SwiperSlide>
      ))}
    </SectionInitialPage>
  );
};

export default Estrenos;
