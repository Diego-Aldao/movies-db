import { useParams } from "react-router-dom";
import LayoutPrincipal from "../Layout/LayoutPrincipal";

import useDetalle from "../hooks/useDetalle";
import { useState, useEffect } from "react";
import ScrollTop from "../components/ScrollTop";

import DetalleMedia from "../components/PaginaDetalle/DetalleMedia/DetalleMedia";
import DetallePersona from "../components/PaginaDetalle/DetallePersona/DetallePersona";

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
      <ScrollTop />
      {dataMedia && tipo !== "person" ? (
        <DetalleMedia dataMedia={dataMedia} tipo={tipo} id={id} />
      ) : (
        dataPersona && <DetallePersona dataPersona={dataPersona} />
      )}
    </LayoutPrincipal>
  );
};

export default PaginaDetalle;
