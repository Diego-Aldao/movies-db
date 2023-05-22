import styled from "styled-components";
import ItemBusqueda from "./ItemBusqueda";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;

const Grid = ({ detalle, propsMedia }) => {
  const { results } = detalle;
  return (
    <StyledGrid>
      {results.map((resultado) => (
        <ItemBusqueda
          resultado={resultado}
          key={resultado.id}
          propsMedia={propsMedia}
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;
