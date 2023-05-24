import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useDetalle from "../hooks/useDetalle";

import LayoutPrincipal from "../Layout/LayoutPrincipal";
import ScrollTop from "../components/ScrollTop";
import MainPage from "../components/MainPage";
import Header from "../components/PaginaBusqueda/Header";
import Filtros from "../components/PaginaBusqueda/Filtros";
import Grid from "../components/Grid/Grid";
import ItemGrid from "../components/Grid/ItemGrid";

import styled from "styled-components";

const MainPageBusqueda = styled(MainPage)`
  min-height: calc(100vh - 770px);
  @media (min-width: 768px) {
    min-height: calc(100vh - 510px);
  }
  @media (min-width: 1024px) {
    min-height: calc(100vh - 370px);
  }
`;

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
      <MainPageBusqueda>
        <Header query={params.query} />
        {currentData && (
          <>
            <Filtros filtros={filtros} total={total} query={params.query} />
            <Grid>
              {detalle.results.map((resultado) => (
                <ItemGrid
                  data={resultado}
                  key={resultado.id}
                  propsMedia={params.media}
                />
              ))}
            </Grid>
          </>
        )}
      </MainPageBusqueda>
    </LayoutPrincipal>
  );
};

export default PaginaBusqueda;
