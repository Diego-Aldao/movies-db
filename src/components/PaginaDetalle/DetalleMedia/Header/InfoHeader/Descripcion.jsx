import styled from "styled-components";

const StyledDescripcion = styled.div`
  h3 {
    text-transform: capitalize;
    font-size: clamp(20px, 3vw, 24px);
  }
  p {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    p {
      max-width: 85%;
    }
  }
`;

const Descripcion = ({ descripcion }) => {
  return (
    <StyledDescripcion>
      <h3>vista general</h3>
      <p>{descripcion}</p>
    </StyledDescripcion>
  );
};

export default Descripcion;
