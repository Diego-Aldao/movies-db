import { useNavigate } from "react-router-dom";

const Link = ({ navigateTo }) => {
  const { categoria, subCategoria, titulo } = navigateTo;

  const navigate = useNavigate();

  const handleClick = (categoria, subCategoria, titulo) => {
    const url = `https://api.themoviedb.org/3/${categoria}/${subCategoria}?language=es-ES&page=1`;
    const paginaInicial = { ...navigateTo, url };

    localStorage.setItem("PaginaInicial", JSON.stringify(paginaInicial));
    navigate(`/${titulo}/${subCategoria}`);
  };

  const newTitulo = titulo.replaceAll("-", " ");
  return (
    <span
      onClick={() => {
        handleClick(categoria, subCategoria, titulo);
      }}
    >
      {newTitulo}
    </span>
  );
};

export default Link;
