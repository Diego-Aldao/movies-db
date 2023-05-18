const getDuracion = (minutos) => {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  if (horas >= 1 || minutosRestantes >= 1) {
    return `${horas}h ${minutosRestantes}m`;
  } else {
    return false;
  }
};

export default getDuracion;
