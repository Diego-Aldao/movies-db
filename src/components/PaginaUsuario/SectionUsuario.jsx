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

const StyledGridUsuario = styled(StyledGrid)`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (min-width: 850px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
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
      <StyledGridUsuario>
        {interaccion?.map((item) => (
          <ItemUsuario
            item={item}
            guardarFavorito={guardarFavorito}
            añadirGuardado={añadirGuardado}
            key={item.id}
          />
        ))}
      </StyledGridUsuario>
    </StyledSection>
  );
};

export default SeccionUsuario;
