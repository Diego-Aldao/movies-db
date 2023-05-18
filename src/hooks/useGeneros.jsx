import { useState } from "react";

const useGeneros = () => {
  const [generos, setGeneros] = useState();
  const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

  const handleFetch = (response) => {
    localStorage.setItem("Generos", JSON.stringify(response.genres));
    setGeneros(response.genres);
  };

  const getGeneros = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=es", options)
      .then((response) => response.json())
      .then((response) => handleFetch(response))
      .catch((err) => console.error(err));
  };

  return { generos, getGeneros };
};

export default useGeneros;
