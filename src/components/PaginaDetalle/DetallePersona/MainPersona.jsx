import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding-inline: 10px;
  padding-top: 40px;
  margin: 50px auto 0px;
  max-width: 1400px;
  .main-info-persona {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    padding-inline: 24px;
  }
  @media (min-width: 1024px) {
    padding-inline: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    .main-info-persona {
      width: calc(100% - 330px);
      margin: 0;
    }
  }
`;

const MainPersona = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainPersona;
