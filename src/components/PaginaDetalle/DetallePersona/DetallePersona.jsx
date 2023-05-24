import MainPage from "../../MainPage";
import AboutPersona from "./AboutPersona";
import ParticipacionesPersona from "./ParticipacionesPersona";
import SideInfoPersona from "./SideInfoPersona";
import TablasPersona from "./Tablas/TablasPersona";
import styled from "styled-components";

const MainPagePersona = styled(MainPage)`
  padding-top: 40px;
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 1024px) {
    width: calc(100% - 330px);
    margin: 0;
  }
`;

const DetallePersona = ({ dataPersona }) => {
  const { combined_credits } = dataPersona;
  return (
    <MainPagePersona>
      <SideInfoPersona data={dataPersona} />
      <StyledInfo>
        <AboutPersona data={dataPersona} />
        <ParticipacionesPersona data={combined_credits} />
        <TablasPersona data={combined_credits} />
      </StyledInfo>
    </MainPagePersona>
  );
};

export default DetallePersona;
