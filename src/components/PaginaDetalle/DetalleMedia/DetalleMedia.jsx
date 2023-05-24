import HeaderBanner from "../../HeaderBanner/HeaderBanner";
import InfoBanner from "../../HeaderBanner/InfoBanner/InfoBanner";
import UsersInfo from "../../HeaderBanner/InfoBanner/UsersInfo";
import AboutHeader from "../../HeaderBanner/InfoBanner/AboutHeader";
import Descripcion from "../../HeaderBanner/InfoBanner/Descripcion";
import Providers from "../../HeaderBanner/InfoBanner/Providers";
import Creadores from "../../HeaderBanner/InfoBanner/Creadores";
import Cast from "./Cast";
import Media from "./Media/Media";
import Coleccion from "./Coleccion";
import Similares from "./Similares";
import SideInfo from "./SideInfo/SideInfo";
import MainPage from "../../MainPage";
import styled from "styled-components";

const MainPageMedia = styled(MainPage)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const DetalleMedia = ({ dataMedia, id, tipo }) => {
  const {
    backdrop_path,
    poster_path,
    overview,
    created_by,
    credits,
    belongs_to_collection,
    similar,
  } = dataMedia;

  const providers = dataMedia["watch/providers"].results;

  return (
    <>
      <HeaderBanner
        imagenes={{
          imagenBg: backdrop_path,
          imagenPoster: poster_path,
        }}
      >
        <InfoBanner imagen={poster_path}>
          <UsersInfo userInfo={{ ...dataMedia, media_type: tipo }} />
          <AboutHeader dataAbout={dataMedia} />
          <Descripcion descripcion={overview} />
          <Providers providers={providers} />
          <Creadores creadores={created_by} />
        </InfoBanner>
      </HeaderBanner>
      <MainPageMedia>
        <Cast cast={credits} />
        <Media idMedia={id} mediaType={tipo} />
        {belongs_to_collection && (
          <Coleccion coleccion={belongs_to_collection} />
        )}
        <Similares dataSimilares={similar} />
        <SideInfo data={{ ...dataMedia, media_type: tipo }} />
      </MainPageMedia>
    </>
  );
};

export default DetalleMedia;
