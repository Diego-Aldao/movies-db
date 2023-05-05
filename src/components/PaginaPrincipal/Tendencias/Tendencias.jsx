import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import ItemSection from "../ItemSection";
import Filtro from "./Filtro";
import useTendencias from "../../../hooks/useTendencias";
import SectionInitialPage from "../SectionInitialPage";

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

const URL_BG =
  "https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg";

const Tendencias = () => {
  const [mediaType, setMediaType] = useState("all");
  const [timeWindow, setTimeWindow] = useState("day");
  const { tendencias, getTendencias } = useTendencias();

  useEffect(() => {
    getTendencias(timeWindow, mediaType);
  }, [mediaType, timeWindow]);

  return (
    <SectionInitialPage
      titulo={"tendencias"}
      imagen={URL_BG}
      filtros={
        <>
          <Filtro options={dateOptions} setState={setTimeWindow} />
          <Filtro options={typeOptions} setState={setMediaType} />
        </>
      }
    >
      {tendencias?.map((itemTendencia) => (
        <SwiperSlide key={itemTendencia.id}>
          <ItemSection itemData={itemTendencia} />
        </SwiperSlide>
      ))}
    </SectionInitialPage>
  );
};

export default Tendencias;
