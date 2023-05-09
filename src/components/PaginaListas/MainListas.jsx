import styled from "styled-components";

const StyledContenedor = styled.main`
  padding: 30px 10px;
  margin-top: 50px;
  max-width: 1400px;
  margin: 50px auto 0;
  @media (min-width: 768px) {
    padding-inline: 24px;
  }
  @media (min-width: 1024px) {
    padding-inline: 50px;
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    grid-gap: 30px;
  }
`;

const SectionListas = ({ children }) => {
  return <StyledContenedor>{children}</StyledContenedor>;
};

export default SectionListas;
