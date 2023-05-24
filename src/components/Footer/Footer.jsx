import styled from "styled-components";
import Logo from "../Logo";

const StyledFooter = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 25px;
  padding: 50px 10px;
  max-width: 1400px;
  margin: 0 auto;
  div,
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .brand {
    p {
      color: var(--color-texto-principal);
    }
  }
  h2 {
    text-transform: capitalize;
  }
  li {
    color: var(--color-texto-secundario);
  }
  li:first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    div {
      align-items: center;
      text-align: center;
    }
    .brand {
      grid-column: 1 / 3;
      align-items: center;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    padding-inline: 50px;
    .brand {
      grid-column: 1 / 5;
      align-items: center;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="brand">
        <Logo />
        <p>Peliculas, series y celebridades</p>
      </div>
      <div>
        <h2>lo básico</h2>
        <ul>
          <li>sobre MovieVerse</li>
          <li>contacto</li>
          <li>foros de ayuda</li>
          <li>api</li>
        </ul>
      </div>
      <div>
        <h2>participa</h2>
        <ul>
          <li>guia de aportaciones</li>
          <li>añadir nueva pelicula</li>
          <li>añadir nuevo programa de tv</li>
        </ul>
      </div>
      <div>
        <h2>comunidad</h2>
        <ul>
          <li>directrices</li>
          <li>discuciones</li>
          <li>tabla de clasificación</li>
          <li>twitter</li>
        </ul>
      </div>
      <div>
        <h2>legal</h2>
        <ul>
          <li>término de uso</li>
          <li>términos de uso de la API</li>
          <li>política de privacidad</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
