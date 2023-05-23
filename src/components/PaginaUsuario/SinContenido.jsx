import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  div {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    gap: 20px;
    p:first-letter {
      text-transform: capitalize;
    }
    p {
      text-align: center;
    }
  }
  @media (min-width: 768px) {
    height: calc(100vh - 250px);
  }
  @media (min-width: 768px) {
    height: calc(100vh - 280px);
  }
`;

const StyledLink = styled(Link)`
  background: var(--color-principal);
  padding: 10px 30px;
  max-width: 200px;
  margin: 0 auto;
  span {
    color: var(--bg-principal);
    font-weight: 800;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

const SinContenido = () => {
  return (
    <StyledSection>
      <div>
        <p>parece que aun no tienes contenido guardado</p>
        <StyledLink to="/">
          <span>ir a explorar</span>
        </StyledLink>
      </div>
    </StyledSection>
  );
};

export default SinContenido;
