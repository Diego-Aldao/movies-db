import styled from "styled-components";
import { Icon } from "@iconify/react";

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #00000090;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const StyledVideo = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  iframe {
    width: 100%;
    height: 50vw;
    max-height: 600px;
  }
  .btn-cerrar {
    margin-bottom: 10px;
    svg {
      width: clamp(20px, 4vw, 40px);
      color: var(--color-principal);
      height: clamp(20px, 4vw, 40px);
    }
  }
`;

const ModalVideo = ({ video, isVisible, setIsVisible }) => {
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const url =
    video?.site === "YouTube"
      ? `https://www.youtube.com/embed/${video?.key}`
      : `https://player.vimeo.com/video/${video?.key}`;

  return (
    <>
      {video && (
        <StyledModal isVisible={isVisible}>
          <StyledVideo>
            <div className="btn-cerrar" onClick={handleClick}>
              <Icon icon="mdi:close-thick" />
            </div>
            <iframe
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </StyledVideo>
        </StyledModal>
      )}
    </>
  );
};

export default ModalVideo;
