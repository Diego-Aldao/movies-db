import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    display: flex;
    gap: 5px;
    flex-direction: column;
    span:first-child {
      color: var(--color-texto-principal);
      font-weight: 500;
    }
    span {
      text-transform: capitalize;
      font-size: 14px;
    }
    .img-canal {
      position: block;
      width: 80px;
      img {
        width: 100%;
        height: 100%;
        filter: invert(100%);
        object-fit: contain;
      }
    }
  }
`;
const InfoMovie = ({ dataMovie }) => {
  const { original_title, status, original_language, budget, revenue } =
    dataMovie;
  const presupuesto = `$ ${new Intl.NumberFormat("es-AR").format(budget)}`;
  const ingresos = `$ ${new Intl.NumberFormat("es-AR").format(revenue)}`;
  const nombreLenguajes = new Intl.DisplayNames(["es"], { type: "language" });
  const idiomaOriginal = nombreLenguajes.of(original_language);
  const estadosPeliculas = {
    Canceled: "Cancelada",
    "In Production": "En producción",
    Planned: "Programada",
    "Post Production": "Posproducción",
    Released: "Estrenada",
    Rumored: "Se rumorea",
  };
  const estado = estadosPeliculas[status];
  return (
    <StyledList>
      <li>
        <span>titulo original</span>
        <span>{original_title}</span>
      </li>
      <li>
        <span>estado</span>
        <span>{estado}</span>
      </li>
      <li>
        <span>idioma original</span>
        <span>{idiomaOriginal}</span>
      </li>
      <li>
        <span>presupuesto</span>
        <span>{presupuesto}</span>
      </li>
      <li>
        <span>ingresos</span>
        <span>{ingresos}</span>
      </li>
    </StyledList>
  );
};

const InfoTv = ({ dataTv }) => {
  const { status, networks, type, original_language } = dataTv;

  const IMGURL = "https://image.tmdb.org/t/p/h30";

  const nombreLenguajes = new Intl.DisplayNames(["es"], { type: "language" });
  const idiomaOriginal = nombreLenguajes.of(original_language);

  const estadosSeries = {
    Canceled: "Cancelado",
    Ended: "Finalizado",
    "In Production": "En producción",
    Pilot: "Piloto",
    Planned: "Programado",
    "Returning Series": "Volverá a emitirse",
  };
  const estado = estadosSeries[status];

  const tipos = {
    Documentary: "Documental",
    Miniseries: "Miniseries",
    News: "Noticias",
    Reality: "Realidad",
    Scripted: "Con guion",
    "Talk Show": "Programa de entrevistas",
    Video: "Vídeo",
  };
  const tipo = tipos[type];

  return (
    <StyledList>
      <li>
        <span>estado</span>
        <span>{estado}</span>
      </li>
      <li>
        <span>canal</span>
        {networks.map((canal) => (
          <span key={canal.id} className="img-canal">
            <img src={`${IMGURL}${canal.logo_path}`} alt={canal.name} />
          </span>
        ))}
      </li>
      <li>
        <span>tipo</span>
        <span>{tipo}</span>
      </li>
      <li>
        <span>idioma original</span>
        <span>{idiomaOriginal}</span>
      </li>
    </StyledList>
  );
};

const AboutMedia = ({ mediaData, media_type }) => {
  return (
    <>
      {media_type === "movie" ? (
        <InfoMovie dataMovie={mediaData} />
      ) : (
        <InfoTv dataTv={mediaData} />
      )}
    </>
  );
};

export default AboutMedia;
