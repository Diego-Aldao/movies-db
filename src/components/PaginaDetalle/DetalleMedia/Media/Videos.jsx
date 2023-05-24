import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledContenedor = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background: var(--bg-principal);
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    color: var(--color-principal);
  }
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Videos = ({ data, setCurrentVideo, setIsVisible }) => {
  const { key } = data;
  const URL = `https://i.ytimg.com/vi/${key}/hqdefault.jpg`;

  const handleClick = () => {
    setCurrentVideo(data);
    setIsVisible((prevState) => !prevState);
  };

  return (
    <StyledContenedor onClick={handleClick}>
      <img
        src={URL}
        alt="imagen placeholder de un video sobre una pelicula o serie"
      />
      <StyledButton className="boton-play">
        <Icon icon="tabler:player-play-filled" />
      </StyledButton>
    </StyledContenedor>
  );
};

export default Videos;
