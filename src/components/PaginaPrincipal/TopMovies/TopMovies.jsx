import { SwiperSlide } from "swiper/react";
import ItemSection from "../ItemSection";
import { useEffect } from "react";
import SectionPage from "../../SectionPage";
import useDetalle from "../../../hooks/useDetalle";

const URL = `https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1&region=AR`;

const TopMovies = () => {
  const { detalle, getDetalle } = useDetalle();

  useEffect(() => {
    getDetalle(URL);
  }, []);

  return (
    <>
      {detalle && (
        <SectionPage titulo={"peliculas mejor valoradas"}>
          {detalle.results.map((movie) => {
            const newMovie = { ...movie, media_type: "movie" };
            return (
              <SwiperSlide key={newMovie.id}>
                <ItemSection itemData={newMovie} />
              </SwiperSlide>
            );
          })}
        </SectionPage>
      )}
    </>
  );
};

export default TopMovies;
