import { StyledList } from "./AboutMedia";
import { estadosPeliculas } from "../../../../../Utils/Traducciones";

const InfoMovie = ({ dataMovie }) => {
  const { original_title, status, original_language, budget, revenue } =
    dataMovie;

  const presupuesto =
    budget !== 0 ? `$ ${new Intl.NumberFormat("es-AR").format(budget)}` : "-";

  const ingresos =
    revenue !== 0 ? `$ ${new Intl.NumberFormat("es-AR").format(revenue)}` : "-";

  const nombreLenguajes = new Intl.DisplayNames(["es"], { type: "language" });

  const idiomaOriginal = nombreLenguajes.of(original_language);

  const estado = estadosPeliculas[status];

  return (
    <StyledList>
      <li>
        <span>título original</span>
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

export default InfoMovie;
