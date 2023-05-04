import { useState } from "react";

const useTendencias = () => {
  const [tendencias, setTendencias] = useState([]);

  const getTendencias = (date, type) => {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/${type}/${date}?api_key=${key}&region=AR&language=es-ES`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setTendencias(data.results));
  };

  return { tendencias, getTendencias };
};

export default useTendencias;
