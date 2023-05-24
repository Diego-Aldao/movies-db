import { useEffect, useState } from "react";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import ContenedorFiltros from "../components/PaginaListas/Filtros/ContenedorFiltros";
import Header from "../components/PaginaListas/Header";
import useInitialData from "../hooks/useInitialData";
import useFiltros from "../hooks/useFiltros";
import ContenedorLista from "../components/PaginaListas/ContenedorLista";
import ScrollTop from "../components/ScrollTop";
import styled from "styled-components";
import MainPage from "../components/MainPage";

const MainPageListas = styled(MainPage)`
  padding-block: 30px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    grid-gap: 30px;
  }
`;

const PaginaListas = () => {
  const dataInicial = JSON.parse(localStorage.getItem("PaginaInicial"));

  const { url, titulo, categoria, subCategoria } = dataInicial;
  const newTitulo = titulo.replaceAll("-", " ");

  const initialValue = JSON.parse(localStorage.getItem("InitialData"));
  const [dataSubCategoria, setDataSubCategoria] = useState(
    initialValue?.results
  );
  /*dataLista empieza con la data inicial relacionada a la pagina y luego puede ser modificada con los filtros, pero al recargar vuelve a la data relacionada a la pagina*/

  const { initialData, getInitialData } = useInitialData();
  const { listaFiltrada, getListaFiltrada } = useFiltros();

  const initialFiltros = {
    pagina: 1,
    categoria: categoria,
    generos: "",
    sort: "",
  };

  const [filtros, setFiltros] = useState(initialFiltros);

  useEffect(() => {
    getInitialData(url);
  }, [url]);

  useEffect(() => {
    if (!initialData) return;
    setDataSubCategoria(initialData.results);
  }, [initialData]);

  return (
    <LayoutPrincipal>
      <ScrollTop />
      <MainPageListas>
        <Header>
          <h2>{`${newTitulo} ${subCategoria}es`}</h2>
        </Header>
        {categoria !== "person" && (
          <ContenedorFiltros
            setDataSubCategoria={setDataSubCategoria}
            data_type={categoria}
            setFiltros={setFiltros}
            filtros={filtros}
            listaFiltrada={listaFiltrada}
            getListaFiltrada={getListaFiltrada}
          />
        )}
        {dataSubCategoria && filtros && (
          <ContenedorLista
            data_type={categoria}
            dataSubCategoria={dataSubCategoria}
            filtros={filtros}
            setFiltros={setFiltros}
            listaFiltrada={listaFiltrada}
            getListaFiltrada={getListaFiltrada}
            setDataSubCategoria={setDataSubCategoria}
          />
        )}
      </MainPageListas>
    </LayoutPrincipal>
  );
};

export default PaginaListas;
