import { useState } from "react";

const useFiltros = () => {
  const [listaFiltrada, setListaFiltrada] = useState();
  const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

  const handleFetch = (data) => {
    localStorage.setItem("Lista", JSON.stringify(data));
    setListaFiltrada(data);
  };

  const getListaFiltrada = (url) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => handleFetch(data));
  };

  return { listaFiltrada, getListaFiltrada };
};

export default useFiltros;
