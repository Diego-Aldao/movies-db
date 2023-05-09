import { useState } from "react";
import { Icon } from "@iconify/react";
import { StyledFiltro } from "./ItemFiltro";
import Filtro from "../../PaginaPrincipal/Tendencias/Filtro";
import styled from "styled-components";
import { useEffect } from "react";

const NewStyledFiltro = styled(StyledFiltro)`
  .select {
    width: 100%;
    z-index: 22;
    text-transform: capitalize;
    font-size: 14px;
  }
`;

const optionsSort = [
  {
    value: "&sort_by=popularity.asc",
    label: "Popularidad Ascendente",
  },
  {
    value: "&sort_by=popularity.desc",
    label: "Popularidad Descendente",
  },
  {
    value: "&sort_by=revenue.asc",
    label: "Recaudacion Ascendente",
  },
  {
    value: "&sort_by=revenue.desc",
    label: "Recaudacion Descendente",
  },
  {
    value: "&sort_by=primary_release_date.asc",
    label: "Fecha De Estreno Ascendente",
  },
  {
    value: "&sort_by=primary_release_date.desc",
    label: "Fecha De Estreno Descendente",
  },
  {
    value: "&sort_by=vote_average.asc",
    label: "Valoracion Ascendente",
  },
  {
    value: "&sort_by=vote_average.desc",
    label: "Valoracion Descendente",
  },
];

const ItemSort = ({ filtros, setFiltros }) => {
  const [isVisible, setIsVisible] = useState();
  const [currentSort, setCurrentSort] = useState("");

  useEffect(() => {
    setFiltros({ ...filtros, sort: currentSort, pagina: 1 });
  }, [currentSort]);

  return (
    <NewStyledFiltro isVisible={isVisible}>
      <h3
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        ordenar
        {isVisible ? (
          <Icon icon="mdi:chevron-down" />
        ) : (
          <Icon icon="mdi:chevron-right" />
        )}
      </h3>
      <div className="orden">
        <p className="subtitulo">ordenar resultados por:</p>
        <Filtro options={optionsSort} setState={setCurrentSort} />
      </div>
    </NewStyledFiltro>
  );
};

export default ItemSort;
