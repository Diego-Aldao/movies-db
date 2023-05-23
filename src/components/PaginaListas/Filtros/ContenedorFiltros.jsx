import styled from "styled-components";
import ItemFiltro from "./ItemFiltro";
import { useEffect } from "react";
import { useState } from "react";
import ItemSort from "./ItemSort";
import useGeneros from "../../../hooks/useGeneros";

const StyledContenedorFiltros = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  font-size: 18px;
  text-transform: capitalize;
  padding: 10px 0px;
  border-radius: 25px;
  font-weight: 600;
  background: var(--color-principal);
  color: var(--bg-principal);
  border: 1px solid var(--color-principal);
  cursor: pointer;
  &:disabled {
    cursor: initial;
    background: var(--bg-secundario);
    color: var(--color-texto-terciario);
    border: 1px solid var(--bg-secundario);
  }
`;

const ContenedorFiltros = ({
  setDataSubCategoria,
  setFiltros,
  filtros,
  getListaFiltrada,
  listaFiltrada,
}) => {
  const generosLS = JSON.parse(localStorage.getItem("Generos"));
  const [dataGeneros, setDataGeneros] = useState(generosLS);
  const [started, setStarted] = useState(false);
  const { generos, getGeneros } = useGeneros();
  const dataInicial = JSON.parse(localStorage.getItem("PaginaInicial"));
  const { categoria } = dataInicial;

  useEffect(() => {
    if (generosLS) return;
    getGeneros();
  }, []);

  useEffect(() => {
    if (!generos) return;
    setDataGeneros(generos);
  }, [generos]);

  useEffect(() => {
    if (!listaFiltrada) return;
    setDataSubCategoria(listaFiltrada.results);
  }, [listaFiltrada]);

  useEffect(() => {
    if (filtros?.generos?.length === 0 && filtros?.sort?.length === 0) {
      setStarted(false);
    } else {
      setStarted(true);
    }
  }, [filtros?.generos, filtros?.sort]);

  const handleClick = () => {
    const newFiltros = { ...filtros, pagina: 1, categoria: categoria };
    const url = `https://api.themoviedb.org/3/discover/${categoria}?include_adult=false&include_video=false&language=es-ES&page=${newFiltros.pagina}${filtros.sort}${filtros.generos}`;
    getListaFiltrada(url);
  };

  return (
    <StyledContenedorFiltros>
      <ItemSort setFiltros={setFiltros} filtros={filtros} />
      <ItemFiltro
        generos={dataGeneros}
        setDataGeneros={setDataGeneros}
        setFiltros={setFiltros}
        filtros={filtros}
      />
      <StyledButton disabled={started ? false : true} onClick={handleClick}>
        buscar
      </StyledButton>
    </StyledContenedorFiltros>
  );
};

export default ContenedorFiltros;
