import { StyledList } from "./AboutMedia";
import { tipoDeSerie, estadosSeries } from "../../../../../Utils/Traducciones";

const InfoTv = ({ dataTv }) => {
  const { status, networks, type, original_language } = dataTv;

  const IMGURL = "https://image.tmdb.org/t/p/h30";

  const nombreLenguajes = new Intl.DisplayNames(["es"], { type: "language" });
  const idiomaOriginal = nombreLenguajes.of(original_language);

  const estado = estadosSeries[status];

  const tipo = tipoDeSerie[type];

  return (
    <StyledList>
      <li>
        <span>estado</span>
        <span>{estado}</span>
      </li>
      <li>
        <span>canal</span>
        {networks?.map((canal) => (
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

export default InfoTv;
