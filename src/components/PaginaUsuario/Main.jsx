import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding-inline: 10px;
  margin: 0 auto;
  max-width: 1400px;
  min-height: calc(100vh - 630px);
  @media (min-width: 768px) {
    padding-inline: 24px;
  }

  @media (min-width: 1024px) {
    padding-inline: 50px;
  }
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
