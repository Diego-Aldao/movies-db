import styled from "styled-components";
import background from "../../assets/user-bg.svg";

const StyledHeader = styled.header`
  background: var(--bg-secundario);
  .contenedor-background {
    width: 100%;
    background: ${({ background }) => `url(${background})`} no-repeat center /
      cover;
    padding-block: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-inline: 10px;
    max-width: 1400px;
    margin: 0 auto;
  }
  width: 100%;
  margin-top: 50px;
  h1,
  p {
    line-height: 1.1;
  }
  p {
    font-weight: 700;
  }
  p:first-letter {
    text-transform: capitalize;
  }
  @media (min-width: 768px) {
    .contenedor-background {
      justify-content: flex-start;
      padding: 50px 24px;
    }
  }
  @media (min-width: 1024px) {
    .contenedor-background {
      justify-content: flex-start;
      padding: 50px 50px;
    }
  }
`;

const StyledAvatar = styled.div`
  min-width: 85px;
  min-height: 85px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-principal);
  span {
    color: var(--bg-secundario);
    text-transform: uppercase;
    font-size: 42px;
    font-family: var(--fuente-principal);
  }
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1024px) {
    width: 130px;
    height: 130px;
  }
`;

const Header = () => {
  return (
    <StyledHeader background={background}>
      <div className="contenedor-background">
        <StyledAvatar>
          <span>m</span>
        </StyledAvatar>
        <div className="info-usuario">
          <h1>Minato Namikaze</h1>
          <p>miembro desde mayo del 2022</p>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
