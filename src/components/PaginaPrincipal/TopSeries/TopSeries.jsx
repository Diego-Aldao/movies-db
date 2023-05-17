import { SwiperSlide } from "swiper/react";
import SectionPage from "../../SectionPage";
import ItemSection from "../ItemSection";
import { useEffect } from "react";
import useDetalle from "../../../hooks/useDetalle";

const URL = `https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=1&region=AR`;

const TopSeries = () => {
  const { detalle, getDetalle } = useDetalle();

  useEffect(() => {
    getDetalle(URL);
  }, []);

  return (
    <>
      {detalle && (
        <SectionPage titulo={"series mejor valoradas"}>
          {detalle.results.map((serie) => {
            const newSerie = { ...serie, media_type: "tv" };
            return (
              <SwiperSlide key={newSerie.id}>
                <ItemSection itemData={newSerie} />
              </SwiperSlide>
            );
          })}
        </SectionPage>
      )}
    </>
  );
};

export default TopSeries;
