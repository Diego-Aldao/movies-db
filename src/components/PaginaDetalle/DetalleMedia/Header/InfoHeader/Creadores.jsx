import styled from "styled-components";

const StyledCreadores = styled.ul`
  display: flex;
  gap: 15px;
  max-width: 700px;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span:first-child {
      color: var(--color-texto-principal);
      font-weight: 600;
    }
    span {
      font-size: 14px;
      text-transform: capitalize;
    }
    span:last-child {
      font-size: 13px;
    }
  }
`;

const Creadores = ({ creadores }) => {
  return (
    <StyledCreadores>
      {creadores?.map((creador) => (
        <li key={creador.id}>
          <span>{creador.name}</span>
          <span>creador</span>
        </li>
      ))}
    </StyledCreadores>
  );
};

export default Creadores;
