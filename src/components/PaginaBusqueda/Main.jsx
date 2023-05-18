import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  padding-inline: 10px;
  max-width: 1400px;
  margin: 50px auto 0px;
  min-height: calc(100vh - 770px);
  @media (min-width: 768px) {
    padding-inline: 24px;
    min-height: calc(100vh - 510px);
  }
  @media (min-width: 1024px) {
    padding-inline: 50px;
    min-height: calc(100vh - 370px);
  }
`;
const StyledHeader = styled.header`
  width: 100%;
  padding-block: 20px;
  h1:first-letter {
    text-transform: uppercase;
  }
  h1 {
    font-size: clamp(24px, 3.5vw, 32px);
  }
`;
const Main = ({ params, children }) => {
  return (
    <StyledSection>
      <StyledHeader>
        <h1>resultados para &quot;{params.query}&quot;</h1>
      </StyledHeader>
      {children}
    </StyledSection>
  );
};

export default Main;
