import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.span`
  cursor: pointer;
`;

const NavLink = ({ navigateTo, setModalIsVisible }) => {
  const { categoria, subCategoria, titulo } = navigateTo;

  const navigate = useNavigate();

  const handleClick = (categoria, subCategoria, titulo) => {
    if (setModalIsVisible) {
      setModalIsVisible((prevState) => !prevState);
    }
    const url = `https://api.themoviedb.org/3/${categoria}/${subCategoria}?language=es-ES&page=1`;
    const paginaInicial = { ...navigateTo, url };

    localStorage.setItem("PaginaInicial", JSON.stringify(paginaInicial));
    navigate(`/${titulo}/${subCategoria}`);
  };

  const newTitulo = titulo.replaceAll("-", " ");
  return (
    <StyledLink
      onClick={() => {
        handleClick(categoria, subCategoria, titulo);
      }}
    >
      {newTitulo}
    </StyledLink>
  );
};

export default NavLink;
