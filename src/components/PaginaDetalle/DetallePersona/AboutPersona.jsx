import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledBiografia = styled.section`
  width: 100%;
  header {
    padding-block: 20px;
  }
  width: 100%;
  h1 {
    display: none;
    font-size: 42px;
  }
  h2 {
    text-transform: capitalize;
  }
  p {
    font-size: 15px;
    line-height: 1.5;
  }
  p:first-letter {
    text-transform: capitalize;
  }
  @media (min-width: 1024px) {
    h1 {
      display: flex;
      gap: 20px;
    }
    .interaccion {
      display: flex;
      gap: 10px;
      align-items: center;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

const AboutPersona = ({ data }) => {
  const { biography, name } = data;

  const biografia = !biography
    ? "ups, parece que aun no hay una biografia en español de esta celebridad"
    : biography;
  return (
    <StyledBiografia>
      <h1>
        {name}{" "}
        <span className="interaccion">
          <Icon icon="tabler:heart" />
          <Icon icon="tabler:bookmark" />
        </span>
      </h1>
      <header>
        <h2>biografía</h2>
      </header>
      <p>{biografia}</p>
    </StyledBiografia>
  );
};

export default AboutPersona;
