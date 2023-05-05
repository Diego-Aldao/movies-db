import { SwiperSlide } from "swiper/react";
import SectionInitialPage from "../SectionInitialPage";
import ItemSection from "../ItemSection";
import { useEffect, useState } from "react";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState();

  const KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=es-ES&page=1&region=AR`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setTopMovies(data.results));
  }, []);

  return (
    <SectionInitialPage titulo={"peliculas mejor valoradas"}>
      {topMovies?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <ItemSection itemData={movie} />
        </SwiperSlide>
      ))}
    </SectionInitialPage>
  );
};

export default TopMovies;
