import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

export const StyledSection = styled.section`
  width: 100%;
  ${({ imagen }) =>
    imagen &&
    css`
      background: url(${imagen});
      background-position: 50% 250px;
      background-repeat: no-repeat;
      background-size: contain;
    `}
  max-width: 1600px;
  overflow: hidden;
  padding-inline: 10px;
  margin: 50px auto 0px;
  ${({ banner }) =>
    banner &&
    css`
      position: relative;
      background: url(${banner});
      background-position: 50% 0%;
      background-size: cover;
      transition: background 0.3s ease-in-out;
      &:after {
        background: var(--bg-principal);
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        filter: opacity(75%);
      }
    `}
  @media (min-width: 768px) {
    padding-inline: 24px;
  }
  @media (min-width: 1024px) {
    padding-inline: 50px;
  }
`;

export const StyledHeader = styled.header`
  padding-top: 20px;
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  position: relative;
  z-index: 5;
  margin-bottom: 25px;
  .select {
    flex: 1 1 calc(50% - 15px);
    max-width: 200px;
    z-index: 22;
    font-weight: 600;
    text-transform: capitalize;
  }
  h2 {
    width: 100%;
  }
  h2 {
    text-transform: capitalize;
  }
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  overflow: visible;
  padding-bottom: 40px;
  .swiper-slide {
    cursor: grab;
  }
  .swiper-scroll {
    cursor: pointer;
    background: var(--bg-secundario);
    div {
      background: var(--color-principal);
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    right: -10px;
    width: 90px;
    height: 95%;
    background: linear-gradient(to right, #ffffff00, var(--bg-principal));
    z-index: 2;
  }
  @media (min-width: 768px) {
    &:after {
      right: -24px;
    }
  }
  @media (min-width: 1024px) {
    &:after {
      right: -50px;
    }
  }
`;

const SectionPage = ({
  children,
  currentBreakpoints,
  titulo,
  filtros,
  imagen,
  banner,
  className,
  currentSpace,
}) => {
  return (
    <StyledSection imagen={imagen} banner={banner} className={className}>
      <StyledHeader>
        <h2>{titulo}</h2>
        {filtros}
      </StyledHeader>
      <StyledSwiper
        style={{
          width: "100%",
          height: "100%",
        }}
        scrollbar={{
          hide: false,
          horizontalClass: "swiper-scroll",
          draggable: true,
        }}
        modules={[FreeMode, Scrollbar]}
        freeMode={true}
        slidesPerView={1.85}
        spaceBetween={currentSpace ? currentSpace : 15}
        breakpoints={{
          480: {
            slidesPerView: 3.85,
          },
          768: {
            slidesPerView: 4.9,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6.9,
          },
          ...currentBreakpoints,
        }}
      >
        {children}
      </StyledSwiper>
    </StyledSection>
  );
};

export default SectionPage;
