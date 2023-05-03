const getDuracion = (minutos) => {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  return `${horas}h ${minutosRestantes}m`;
};

export default getDuracion;
