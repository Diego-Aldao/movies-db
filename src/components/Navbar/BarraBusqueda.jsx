import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBusqueda = styled.form`
  background: var(--bg-principal);
  width: 100%;
  padding-inline: 10px;
  padding-block: 10px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  .contenedor-form {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    height: 40px;
    overflow: hidden;
    max-width: 1400px;
    margin: 0 auto;
  }
  button {
    border: none;
    background: var(--color-principal);
    height: 100%;
    padding: 0px 10px;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
    span {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0px;
      color: var(--bg-principal);
      font-family: var(--fuente-principal);
      font-size: clamp(14px, 2vw, 16px);
    }
  }
  input {
    border: 1px solid transparent;
    outline: 1px solid transparent;
    border-radius: 10px 0px 0px 10px;
    color: var(--color-texto-principal);
    font-size: clamp(14px, 2vw, 16px);
    font-family: var(--fuente-principal);
    height: 100%;
    border: none;
    width: 100%;
    background: var(--bg-secundario);
    padding-inline: 15px;
  }
  input:focus {
    border: 1px solid var(--color-principal);
    outline: 1px solid var(--color-principal);
  }

  @media (min-width: 768px) {
    padding-inline: 24px;
  }
  @media (min-width: 1024px) {
    padding-inline: 50px;
  }
`;

const BarraBusqueda = ({ isVisible }) => {
  const [valor, setValor] = useState("");
  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    inputRef.current.focus();
  }, [isVisible]);

  const handleSubmit = () => {
    navigate(`/busqueda/multi/${valor}`);
  };

  const handleChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <StyledBusqueda isVisible={isVisible} onSubmit={handleSubmit}>
      <div className="contenedor-form">
        <input
          ref={inputRef}
          onChange={handleChange}
          value={valor}
          type="text"
          placeholder="Avengers: Endgame, Juego De Tronos, Brad Pitt...."
        />
        <button>
          <span>buscar</span>
        </button>
      </div>
    </StyledBusqueda>
  );
};

export default BarraBusqueda;
