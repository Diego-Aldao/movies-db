import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import ItemSection from "../ItemSection";
import Filtro from "./Filtro";
import SectionPage from "../../SectionPage";
import background from "../../../assets/trending-bg.svg";
import useDetalle from "../../../hooks/useDetalle";

const dateOptions = [
  {
    value: "day",
    label: "hoy",
  },
  {
    value: "week",
    label: "semanal",
  },
];

const typeOptions = [
  {
    value: "all",
    label: "todos",
  },
  {
    value: "movie",
    label: "peliculas",
  },
  {
    value: "tv",
    label: "series",
  },
  {
    value: "person",
    label: "celebridades",
  },
];

const Tendencias = () => {
  const [mediaType, setMediaType] = useState("all");
  const [timeWindow, setTimeWindow] = useState("day");
  const { detalle, getDetalle } = useDetalle();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?region=AR?language=es-ES`;
    getDetalle(url);
  }, [mediaType, timeWindow]);

  return (
    <SectionPage
      titulo={"tendencias"}
      imagen={background}
      filtros={
        <>
          <Filtro options={dateOptions} setState={setTimeWindow} />
          <Filtro options={typeOptions} setState={setMediaType} />
        </>
      }
    >
      {detalle && (
        <>
          {detalle.results.map((itemTendencia) => (
            <SwiperSlide key={itemTendencia.id}>
              <ItemSection itemData={itemTendencia} />
            </SwiperSlide>
          ))}
        </>
      )}
    </SectionPage>
  );
};

export default Tendencias;
