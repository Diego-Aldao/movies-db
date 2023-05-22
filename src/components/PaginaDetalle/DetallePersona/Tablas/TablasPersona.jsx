import styled from "styled-components";
import TablaCast from "./TablaCast";
import TablasCrew from "./TablasCrew";

const StyledSection = styled.section`
  width: 100%;
  header {
    padding-block: 20px;
    h2 {
      text-transform: capitalize;
    }
  }
  table {
    width: 100%;
  }
  td {
    padding-block: 10px;
    border-bottom: 2px solid var(--bg-secundario);
    text-align: center;
  }
  .separador {
    padding-inline: 10px;
    color: var(--color-texto-principal);
  }
  p,
  span {
    font-family: var(--fuente-principal);
    display: inline;
    font-size: 16px;
  }
  .titulo {
    color: var(--color-texto-principal);
    font-weight: 700;
    cursor: pointer;
  }
  .titulo:hover {
    color: var(--color-principal);
  }
  span {
    font-weight: 300;
    color: var(--color-texto-terciario);
  }
  .personaje {
    color: var(--color-texto-secundario);
    font-weight: 500;
  }
  .descripcion {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }
`;

const TablasPersona = ({ data }) => {
  return (
    <StyledSection>
      {data && (
        <>
          <TablaCast cast={data.cast} />
          <TablasCrew crew={data.crew} />
        </>
      )}
    </StyledSection>
  );
};

export default TablasPersona;
