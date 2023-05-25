import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  padding-inline: 10px;
  margin: 80px auto 0px;
  max-width: 1400px;

  @media (min-width: 768px) {
    padding-inline: 24px;
  }

  @media (min-width: 1024px) {
    padding-inline: 50px;
  }
`;

const MainPage = ({ children, className }) => {
  return <StyledMain className={className}>{children}</StyledMain>;
};

export default MainPage;
