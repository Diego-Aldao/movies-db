import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useGuardados from "../../../hooks/useGuardados";
import useFavoritos from "../../../hooks/useFavoritos";
import { departamentos } from "../../../Utils/Traducciones";
import useCurrentInteraccion from "../../../hooks/useCurrentInteraccion";

const StyledBiografia = styled.section`
  width: 100%;
  header {
    padding-block: 20px;
  }
  width: 100%;
  h1 {
    display: none;
    font-size: 42px;
  }
  h2 {
    text-transform: capitalize;
  }
  div {
    position: relative;
  }
  p {
    font-size: 15px;
    line-height: 1.5;
    white-space: break-spaces;
    display: -webkit-box;

    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  svg {
    color: var(--color-principal);
  }

  .ver-mas {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(to right, #0000002d, #000000);
    p {
      padding-inline: 10px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      display: flex;
      gap: 20px;
    }
    .interaccion {
      display: flex;
      gap: 10px;
      align-items: center;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

const AboutPersona = ({ data }) => {
  const { biography, name } = data;

  const biografia = !biography
    ? "ups, parece que aun no hay una biografia en español de esta celebridad"
    : biography;

  const biografiaLarga = biografia.length >= 890;

  const { favoritos, guardarFavorito } = useFavoritos();
  const { guardados, añadirGuardado } = useGuardados();
  const { liked, saved, getCurrentInteraccion } = useCurrentInteraccion();
  const [verMas, setVerMas] = useState(biografiaLarga);

  const initialStyles = {
    WebkitLineClamp: "11",
  };
  const [styles, setStyles] = useState(initialStyles);

  useEffect(() => {
    getCurrentInteraccion(data);
  }, [favoritos, guardados]);

  const handleClick = () => {
    setStyles({ ...styles, WebkitLineClamp: "initial" });
    setVerMas(false);
  };

  const handleAñadir = (tipo) => {
    const objetoGuardado = {
      imagen: data.profile_path,
      titulo: data.name,
      descripcion: biografia,
      subtitulo: departamentos[data.known_for_department],
      id: data.id,
      media: "person",
    };
    if (tipo === "favoritos") {
      guardarFavorito(objetoGuardado);
    } else if (tipo === "guardados") {
      añadirGuardado(objetoGuardado);
    }
  };

  return (
    <StyledBiografia>
      <h1>
        {name}{" "}
        <span className="interaccion">
          {liked ? (
            <Icon
              icon="tabler:heart-filled"
              onClick={() => {
                handleAñadir("favoritos");
              }}
            />
          ) : (
            <Icon
              icon="tabler:heart"
              onClick={() => {
                handleAñadir("favoritos");
              }}
            />
          )}
          {saved ? (
            <Icon
              icon="tabler:bookmark-filled"
              onClick={() => {
                handleAñadir("guardados");
              }}
            />
          ) : (
            <Icon
              icon="tabler:bookmark"
              onClick={() => {
                handleAñadir("guardados");
              }}
            />
          )}
        </span>
      </h1>
      <header>
        <h2>biografía</h2>
      </header>
      <div>
        <p style={styles}>{biografia}</p>
        {verMas && (
          <div className="ver-mas">
            <p onClick={handleClick}>Leer mas</p>
          </div>
        )}
      </div>
    </StyledBiografia>
  );
};

export default AboutPersona;
