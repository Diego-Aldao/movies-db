import { useState } from "react";

const useDetalle = () => {
  const [detalle, setDetalle] = useState();
  const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
  const handleResponse = (data) => {
    setDetalle(data);
  };

  const getDetalle = (url) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => handleResponse(response))
      .catch((err) => console.error(err));
  };

  return { detalle, getDetalle };
};

export default useDetalle;
