import { useState } from "react";
import styled from "styled-components";
import { departamentos } from "../../../Utils/Traducciones";

import Interaccion from "../../Interaccion";

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
    cursor: pointer;
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
  }
`;

const AboutPersona = ({ data }) => {
  const { biography, name } = data;

  const biografia = !biography
    ? "ups, parece que aun no hay una biografia en español de esta celebridad"
    : biography;

  const objetoInteraccion = {
    imagen: data.profile_path,
    titulo: name,
    descripcion: biografia,
    subtitulo: departamentos[data.known_for_department],
    id: data.id,
    media: "person",
  };

  const biografiaLarga = biografia.length >= 890;

  const [verMas, setVerMas] = useState(biografiaLarga);

  const initialStyles = {
    WebkitLineClamp: "11",
  };
  const [styles, setStyles] = useState(initialStyles);

  const handleClick = () => {
    setStyles({ ...styles, WebkitLineClamp: "initial" });
    setVerMas(false);
  };

  return (
    <StyledBiografia>
      <h1>
        {name}
        <Interaccion objetoInfo={objetoInteraccion} />
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
