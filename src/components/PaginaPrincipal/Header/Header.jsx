import ItemHeader from "./ItemHeader/ItemHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper";

import "swiper/css";

const Header = () => {
  const moviesIds = [438631, 603692, 76600, 677179, 640146];
  return (
    <Swiper
      style={{
        width: "100%",
        height: "100%",
      }}
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
    </Swiper>
  );
};

export default Header;
