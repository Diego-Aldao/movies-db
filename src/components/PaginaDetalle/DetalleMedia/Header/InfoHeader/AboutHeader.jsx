import styled from "styled-components";
import getDuracion from "../../../../../helpers/getDuracion";

const StyledAbout = styled.div`
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      font-size: clamp(12px, 2vw, 16px);
    }
    .genero {
      position: relative;
      margin-inline: 10px;
    }
    .genero:after {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      top: calc(50% - 2px);
      right: -12px;
      border-radius: 50%;
      background: var(--color-texto-terciario);
    }
    .genero:last-child::after {
      display: none;
    }
  }
  .subtitulo {
    margin-top: 20px;
    color: var(--color-texto-secundario);
    font-style: italic;
    display: block;
  }
`;

const AboutHeader = ({ dataAbout }) => {
  const {
    title,
    first_air_date,
    genres,
    tagline,
    runtime,
    release_date,
    media_type,
  } = dataAbout;

  const añoLanzamiento =
    first_air_date?.split("-")[0] || release_date?.split("-")[0];

  const esPelicula = media_type === "movie";
  return (
    <StyledAbout>
      <h2>{title}</h2>
      <ul>
        {esPelicula ? (
          <>
            <li>
              <span>{getDuracion(runtime)} |</span>
            </li>
            <li>
              {genres?.map((genero) => (
                <span key={genero.id} className="genero">
                  {genero.name}
                </span>
              ))}
            </li>
            <li>
              <span> | {añoLanzamiento}</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <span>{añoLanzamiento} |</span>
            </li>
            <li>
              {genres?.map((genero) => (
                <span key={genero.id} className="genero">
                  {genero.name}
                </span>
              ))}
            </li>
          </>
        )}
      </ul>
      <span className="subtitulo">{tagline}</span>
    </StyledAbout>
  );
};

export default AboutHeader;
