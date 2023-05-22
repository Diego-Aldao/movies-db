import styled from "styled-components";
import External from "../External";
import { Icon } from "@iconify/react";
import { departamentos } from "../../../Utils/Traducciones";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .imagen-persona {
    margin: 0 auto;
    height: 40vw;
    width: 40vw;
    max-width: 300px;
    max-height: 450px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 20px;
    img {
      object-position: 0% 10%;
    }
  }
  h1 {
    font-size: clamp(32px, 5vw, 42px);
    text-align: center;
  }
  .interaccion {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  ul {
    justify-content: center;
  }
  .nombres {
    display: none;
  }
  @media (min-width: 1024px) {
    width: 300px;
    .interaccion,
    h1 {
      display: none;
    }
    .nombres {
      display: initial;
    }
    ul {
      justify-content: start;
    }
  }
`;

const InfoPersonal = styled.div`
  margin-top: 20px;
  width: 100%;
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    li {
      flex: 1 0 auto;
      min-width: calc(50% - 10px);
      text-align: center;
      p {
        font-size: 14px;
        text-transform: capitalize;
        margin-bottom: 5px;
      }
      p:first-child {
        color: var(--color-texto-principal);
        font-weight: 700;
      }
      .nombres {
        display: none;
      }
    }
  }
  @media (min-width: 1024px) {
    .nombres {
      display: initial;
      p:not(:first-child) {
        margin-bottom: 10px;
      }
    }
    h2 {
      text-align: left;
    }
    ul {
      li {
        text-align: left;
        flex: 1 1 100%;
      }
    }
  }
`;

const SideInfoPersona = ({ data }) => {
  const {
    name,
    combined_credits,
    gender,
    birthday,
    profile_path,
    place_of_birth,
    external_ids,
    known_for_department,
    homepage,
    also_known_as,
  } = data;
  const departamento = departamentos[known_for_department];
  const genero = gender === 1 ? "femenino" : "masculino";
  return (
    <StyledSection>
      <div className="imagen-persona">
        <picture>
          <source
            srcSet={`https://image.tmdb.org/t/p/w200${profile_path}`}
            media="(max-width: 768px)"
          />
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
        </picture>
      </div>
      <h1>{name}</h1>
      <div className="interaccion">
        <Icon icon="tabler:heart" />
        <Icon icon="tabler:bookmark" />
      </div>
      <External externalData={external_ids} homepage={homepage} />
      <InfoPersonal>
        <h2>informacion personal</h2>
        <ul className="lista-info-personal">
          <li>
            <p>conocido por:</p>
            <p>{departamento}</p>
          </li>
          <li>
            <p>creditos conocidos</p>
            <p>{combined_credits.cast.length}</p>
          </li>
          <li>
            <p>sexo</p>
            <p>{genero}</p>
          </li>
          <li>
            <p>fecha de nacimiento</p>
            <p>{birthday}</p>
          </li>
          <li>
            <p>lugar de nacimiento</p>
            <p>{place_of_birth}</p>
          </li>
          {also_known_as.length >= 1 && (
            <li className="nombres">
              <p>tambien conocido como</p>
              {also_known_as.map((nombre, index) => (
                <p key={index}>{nombre}</p>
              ))}
            </li>
          )}
        </ul>
      </InfoPersonal>
    </StyledSection>
  );
};

export default SideInfoPersona;
