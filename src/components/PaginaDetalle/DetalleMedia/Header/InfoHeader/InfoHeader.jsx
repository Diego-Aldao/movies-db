import styled from "styled-components";
import UsersInfo from "./UsersInfo";
import Descripcion from "./Descripcion";
import Providers from "./Providers";
import Creadores from "./Creadores";
import AboutHeader from "./AboutHeader";

const StyledInfo = styled.div`
  max-width: 1400px;
  padding: 10px;
  margin: 0 auto;
  h2 {
    font-size: clamp(24px, 4vw, 40px);
  }
  .poster {
    display: none;
  }
  .contenedor-info {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    height: 100%;
    gap: 10px;
  }

  @media (min-width: 768px) {
    width: 100%;
    position: relative;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 15px;
    padding: 20px 24px;
    z-index: 2;
    .poster {
      display: block;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  @media (min-width: 1024px) {
    padding: 30px 50px;
    gap: 35px;
  }
`;

const InfoHeader = ({ dataInfo }) => {
  const { poster_path, overview, created_by } = dataInfo;
  const providers = dataInfo["watch/providers"].results;

  return (
    <StyledInfo>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </div>
      <div className="contenedor-info">
        <UsersInfo userInfo={dataInfo} />
        <AboutHeader dataAbout={dataInfo} />
        <Descripcion descripcion={overview} />
        <Providers providers={providers} />
        <Creadores creadores={created_by} />
      </div>
    </StyledInfo>
  );
};

export default InfoHeader;
