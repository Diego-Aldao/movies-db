import styled from "styled-components";
import { StyledGrid } from "../PaginaBusqueda/Grid";
import ItemUsuario from "./ItemUsuario";

const StyledSection = styled.section`
  width: 100%;
  margin-top: 30px;
  header {
    margin-bottom: 20px;
  }
  h2 {
    text-transform: capitalize;
  }
`;

const SeccionUsuario = ({
  interaccion,
  guardarFavorito,
  añadirGuardado,
  titulo,
}) => {
  return (
    <StyledSection>
      <header>
        <h2>{titulo}</h2>
      </header>
      <StyledGrid>
        {interaccion?.map((item) => (
          <ItemUsuario
            item={item}
            guardarFavorito={guardarFavorito}
            añadirGuardado={añadirGuardado}
            key={item.id}
          />
        ))}
      </StyledGrid>
    </StyledSection>
  );
};

export default SeccionUsuario;
