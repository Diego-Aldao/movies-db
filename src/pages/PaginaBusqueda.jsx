import { useParams } from "react-router-dom";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import useDetalle from "../hooks/useDetalle";
import { useEffect } from "react";

import { useState } from "react";
import Main from "../components/PaginaBusqueda/Main";
import Filtros from "../components/PaginaBusqueda/Filtros";
import Grid from "../components/PaginaBusqueda/Grid";
import ScrollTop from "../components/ScrollTop";

const PaginaBusqueda = () => {
  const params = useParams();
  const { detalle, getDetalle } = useDetalle();
  const [currentData, setCurrentData] = useState();
  const [filtros, setFiltros] = useState();
  const [total, setTotal] = useState();
  const url = `https://api.themoviedb.org/3/search/${params.media}?query=${params.query}&include_adult=false&language=es-ES&page=1`;

  useEffect(() => {
    getDetalle(url);
  }, [params]);

  useEffect(() => {
    if (!detalle) return;
    if (params.media === "multi") {
      setTotal(detalle.total_results);
    }
    setCurrentData(detalle);
    const currentFiltros = detalle.results.map((resultado) => {
      return resultado.media_type;
    });
    setFiltros(currentFiltros);
  }, [detalle]);

  return (
    <LayoutPrincipal>
      <ScrollTop />
      <Main params={params}>
        {currentData && (
          <>
            <Filtros filtros={filtros} total={total} query={params.query} />
            <Grid detalle={detalle} propsMedia={params.media} />
          </>
        )}
      </Main>
    </LayoutPrincipal>
  );
};

export default PaginaBusqueda;
