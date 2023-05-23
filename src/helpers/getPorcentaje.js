const getPorcentaje = (valor) => {
  const porcentaje = Math.floor((100 * valor) / 10);
  return porcentaje !== 0 ? porcentaje : "-";
};

export default getPorcentaje;
