const getFecha = (fecha) => {
  const fechaFormateada = new Date(fecha).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return fechaFormateada;
};

export default getFecha;
