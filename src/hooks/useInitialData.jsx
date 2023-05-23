import { useState } from "react";

const useInitialData = () => {
  const [initialData, setInitialData] = useState();
  const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

  const handleFetch = (data) => {
    localStorage.setItem("InitialData", JSON.stringify(data));
    setInitialData(data);
  };

  const getInitialData = (initialUrl) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    fetch(initialUrl, options)
      .then((response) => response.json())
      .then((response) => handleFetch(response))
      .catch((err) => console.error(err));
  };

  return { initialData, getInitialData };
};

export default useInitialData;
