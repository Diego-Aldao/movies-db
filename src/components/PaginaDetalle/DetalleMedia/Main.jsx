import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding-inline: 10px;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  @media (min-width: 768px) {
    padding-inline: 24px;
  }
  @media (min-width: 1024px) {
    padding-inline: 50px;
    grid-template-columns: 3fr 1fr;
  }
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
