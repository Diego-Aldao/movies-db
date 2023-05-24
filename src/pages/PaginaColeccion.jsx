import { useParams } from "react-router-dom";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import useDetalle from "../hooks/useDetalle";
import { useEffect } from "react";
import InfoColeccion from "../components/HeaderBanner/InfoBanner/InfoBanner";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import ScrollTop from "../components/ScrollTop";
import Grid from "../components/Grid/Grid";
import ItemGrid from "../components/Grid/ItemGrid";
import Titulo from "../components/PaginaColeccion/Titulo";
import Descripcion from "../components/HeaderBanner/InfoBanner/Descripcion";
import styled from "styled-components";
import MainPage from "../components/MainPage";

const MainPageColeccion = styled(MainPage)`
  margin-top: 0px;
  @media (min-width: 1440px) {
    min-height: calc(100vh - 960px);
  }
`;

const PaginaColeccion = () => {
  const params = useParams();
  const { id } = params;
  const { detalle, getDetalle } = useDetalle();

  useEffect(() => {
    if (!id) return;
    const url = `https://api.themoviedb.org/3/collection/${id}?language=es-ES`;
    getDetalle(url);
  }, [id]);

  return (
    <LayoutPrincipal>
      <ScrollTop />
      {detalle && (
        <>
          <HeaderBanner
            imagenes={{
              imagenBg: detalle.backdrop_path,
              imagenPoster: detalle.poster_path,
            }}
          >
            <InfoColeccion imagen={detalle.poster_path}>
              <h1>{detalle.name}</h1>
              <Descripcion descripcion={detalle.overview} />
            </InfoColeccion>
          </HeaderBanner>
          <MainPageColeccion>
            <Titulo cantidad={detalle.parts.length} />
            <Grid>
              {detalle.parts.map((parte) => (
                <ItemGrid data={parte} key={parte.id} />
              ))}
            </Grid>
          </MainPageColeccion>
        </>
      )}
    </LayoutPrincipal>
  );
};

export default PaginaColeccion;
