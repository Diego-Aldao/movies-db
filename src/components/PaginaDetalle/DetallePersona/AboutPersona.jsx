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
  @media (min-width: 1024px) {
    h1 {
      display: initial;
    }
  }
`;

const AboutPersona = ({ data }) => {
  const { biography, name } = data;
  return (
    <StyledBiografia>
      <h1>{name}</h1>
      <header>
        <h2>biografía</h2>
      </header>
      <p>{biography}</p>
    </StyledBiografia>
  );
};

export default AboutPersona;
