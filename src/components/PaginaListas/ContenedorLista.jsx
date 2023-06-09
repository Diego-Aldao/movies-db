import styled from "styled-components";
import ItemLista from "./ItemLista";
import { useEffect } from "react";

const StyledContenedor = styled.section`
  margin: 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-left: auto;
  width: 100%;
  @media (min-width: 645px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  @media (min-width: 1024px) {
    margin: 0;
    gap: 30px;
    grid-column: ${({ data_type }) =>
      data_type === "person" ? "1 / 3" : "2 / 3"};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  grid-column: ${({ data_type }) =>
    data_type === "person" ? "1 / 3" : "2 / 3"};
  text-transform: uppercase;
  padding-block: 10px;
  background: var(--color-principal);
  border: 1px solid var(--color-principal);
  border-radius: 5px;
  span {
    color: var(--bg-principal);
    font-weight: 600;
    letter-spacing: 0px;
    font-size: clamp(14px, 2.5vw, 18px);
  }
`;

const ContenedorLista = ({
  data_type,
  dataSubCategoria,
  filtros,
  setFiltros,
  listaFiltrada,
  getListaFiltrada,
  setDataSubCategoria,
}) => {
  const dataInicial = JSON.parse(localStorage.getItem("PaginaInicial"));
  const { categoria } = dataInicial;
  const { pagina } = filtros;

  useEffect(() => {
    if (pagina === 1) return;
    if (data_type !== "person") {
      const url = `https://api.themoviedb.org/3/discover/${categoria}?include_adult=false&include_video=false&language=es-ES&page=${pagina}${filtros.sort}${filtros.generos}`;
      getListaFiltrada(url);
    } else {
      const url = `https://api.themoviedb.org/3/person/popular?language=es-ES&page=${pagina}`;
      getListaFiltrada(url);
    }
  }, [filtros]);

  useEffect(() => {
    if (!listaFiltrada || pagina === 1) return;
    const newData = dataSubCategoria.concat(listaFiltrada.results);
    setDataSubCategoria(newData);
  }, [listaFiltrada]);

  const handleClick = () => {
    const newPagina = pagina + 1;

    const newFiltros = {
      ...filtros,
      pagina: newPagina,
      categoria: categoria,
    };
    setFiltros(newFiltros);
  };

  return (
    <>
      <StyledContenedor data_type={data_type}>
        {dataSubCategoria &&
          dataSubCategoria.map((item) => {
            const newItem = { ...item, media_type: data_type };
            return <ItemLista key={newItem.id} info={newItem} />;
          })}
      </StyledContenedor>

      <StyledButton data_type={data_type} onClick={handleClick}>
        <span>mostrar mas</span>
      </StyledButton>
    </>
  );
};

export default ContenedorLista;
