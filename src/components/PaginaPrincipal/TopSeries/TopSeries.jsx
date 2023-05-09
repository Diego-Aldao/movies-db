import { SwiperSlide } from "swiper/react";
import SectionInitialPage from "../SectionInitialPage";
import ItemSection from "../ItemSection";
import { useEffect, useState } from "react";

const TopSeries = () => {
  const [topSeries, setTopSeries] = useState();

  const KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${KEY}&language=es-ES&page=1&region=AR`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setTopSeries(data.results);
      });
  }, []);

  return (
    <SectionInitialPage titulo={"series mejor valoradas"}>
      {topSeries?.map((serie) => (
        <SwiperSlide key={serie.id}>
          <ItemSection itemData={serie} />
        </SwiperSlide>
      ))}
    </SectionInitialPage>
  );
};

export default TopSeries;
