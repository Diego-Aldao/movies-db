import { useState } from "react";

const useDetalle = () => {
  const [detalle, setDetalle] = useState();

  const handleResponse = (data) => {
    setDetalle(data);
  };

  const getDetalle = (url) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzVkZmE2YmExM2ZhNWFhMWU1NzBiODk1ZjlkMjAzYSIsInN1YiI6IjY0NTI3NmEwMzNhZDhmMDE3MjhkODEyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKjZqnxeNVdU1F_AwDCh-0HpfCNP_Ev28-OoQpjQ9MY",
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
