import ItemHeader from "./ItemHeader/ItemHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper";
import styled from "styled-components";
import "swiper/css";

const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  min-height: 75vh;
  margin-top: 50px;
`;

const Header = () => {
  const moviesIds = [603692, 76600, 677179, 640146];
  return (
    <StyledSwiper
      slidesPerView={1}
      parallax={true}
      modules={[Parallax]}
      loop={true}
    >
      {moviesIds.map((id) => (
        <SwiperSlide key={id}>
          <ItemHeader movieId={id} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default Header;
