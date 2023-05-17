import { useParams } from "react-router-dom";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Cast from "../components/PaginaDetalle/DetalleMedia/Cast";
import Coleccion from "../components/PaginaDetalle/DetalleMedia/Coleccion";
import Header from "../components/PaginaDetalle/DetalleMedia/Header/Header";
import Main from "../components/PaginaDetalle/DetalleMedia/Main";
import Media from "../components/PaginaDetalle/DetalleMedia/Media/Media";
import SideInfo from "../components/PaginaDetalle/DetalleMedia/SideInfo/SideInfo";
import Similares from "../components/PaginaDetalle/DetalleMedia/Similares";

import useDetalle from "../hooks/useDetalle";
import MainPersona from "../components/PaginaDetalle/DetallePersona/MainPersona";
import SideInfoPersona from "../components/PaginaDetalle/DetallePersona/SideInfoPersona";
import AboutPersona from "../components/PaginaDetalle/DetallePersona/AboutPersona";
import ParticipacionesPersona from "../components/PaginaDetalle/DetallePersona/ParticipacionesPersona";
import TablasPersona from "../components/PaginaDetalle/DetallePersona/Tablas/TablasPersona";
import { useState, useEffect } from "react";

const PaginaDetalle = () => {
  const params = useParams();
  const { tipo, id } = params;
  const { detalle, getDetalle } = useDetalle();
  const [dataPersona, setDataPersona] = useState();
  const [dataMedia, setDataMedia] = useState();

  useEffect(() => {
    if (!tipo || !id) return;
    if (tipo !== "person") {
      const url = `https://api.themoviedb.org/3/${tipo}/${id}?append_to_response=credits,similar,external_ids,watch/providers&language=es-ES`;
      getDetalle(url);
    } else {
      const url = `https://api.themoviedb.org/3/${tipo}/${id}?append_to_response=combined_credits,external_ids&language=es-ES`;
      getDetalle(url);
    }
  }, [tipo, id]);

  useEffect(() => {
    if (tipo !== "person") {
      setDataMedia(detalle);
    } else {
      setDataPersona(detalle);
    }
  }, [detalle]);

  return (
    <LayoutPrincipal>
      {dataMedia && tipo !== "person" ? (
        <>
          <Header data={{ ...dataMedia, media_type: tipo }} />
          <Main>
            <Cast cast={dataMedia?.credits} />
            <Media idMedia={id} mediaType={tipo} />
            {dataMedia.belongs_to_collection && (
              <Coleccion coleccion={dataMedia?.belongs_to_collection} />
            )}
            <Similares dataSimilares={dataMedia?.similar} />
            <SideInfo data={{ ...dataMedia, media_type: tipo }} />
          </Main>
        </>
      ) : (
        dataPersona && (
          <>
            <MainPersona>
              <SideInfoPersona data={dataPersona} />
              <div className="main-info-persona">
                <AboutPersona data={dataPersona} />
                <ParticipacionesPersona data={dataPersona.combined_credits} />
                <TablasPersona data={dataPersona.combined_credits} />
              </div>
            </MainPersona>
          </>
        )
      )}
    </LayoutPrincipal>
  );
};

export default PaginaDetalle;
