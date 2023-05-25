import { useState } from "react";
import styled from "styled-components";

const StyledGenero = styled.span`
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid var(--color-texto-terciario);
  cursor: pointer;
  font-weight: 500;
  background: ${({ isSelected }) =>
    isSelected ? "var(--color-principal)" : "var(--bg-secundario)"};
  color: ${({ isSelected }) =>
    isSelected ? "var(--bg-principal)" : "var(--color-texto-secundario)"};
  border: 1px solid
    ${({ isSelected }) =>
      isSelected ? "var(--color-principal)" : "var(--color-texto-secundario)"};

  &:hover {
    background: var(--color-principal);
    color: var(--bg-principal);
    border: 1px solid var(--color-principal);
  }
`;

const ItemGenero = ({ handleClick, filtro }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <StyledGenero
      isSelected={isSelected}
      onClick={() => {
        handleClick(filtro.id);
        setIsSelected(!isSelected);
      }}
    >
      {filtro.name}
    </StyledGenero>
  );
};

export default ItemGenero;
