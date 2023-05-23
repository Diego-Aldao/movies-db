import SectionInitialPage from "../../SectionPage";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FailedImage from "../../FailedImage";

const StyledSection = styled(SectionInitialPage)`
  margin-top: 20px;
  padding: 0px 0px 40px;
  .swiper {
    height: auto !important; //la unica manera de sobreescribir esta propiedad del swiper
  }
  div:after {
    display: none;
  }
`;

const ItemCast = styled.div`
  background: var(--bg-secundario);
  display: flex;
  flex-direction: column;
  text-align: center;
  .imagen-persona {
    height: 40vw;
    max-height: 150px;
  }
  .info-persona {
    height: 25vw;
    max-height: 85px;
  }
  p {
    padding-block: 5px;
  }
  .nombre {
    font-size: 14px;
    color: var(--color-texto-principal);
    margin-top: 5px;
  }
  p:last-child {
    font-size: 12px;
  }
`;

const breakpoints = {
  200: {
    slidesPerView: 2.4,
  },
  480: {
    slidesPerView: 3.4,
  },
  768: {
    slidesPerView: 4.4,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 4.4,
  },

  1240: {
    slidesPerView: 5.8,
  },
};

const Cast = ({ cast }) => {
  const mainCast = cast.cast.slice(0, 8);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detalle/person/${id}`);
  };
  return (
    <>
      {mainCast.length >= 1 && (
        <StyledSection
          titulo={"reparto principal"}
          currentBreakpoints={breakpoints}
        >
          {mainCast.map((persona) => (
            <SwiperSlide
              key={persona.id}
              onClick={() => {
                handleClick(persona.id);
              }}
            >
              <ItemCast>
                <div className="imagen-persona">
                  {persona.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${persona.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <FailedImage />
                  )}
                </div>
                <div className="info-persona">
                  <p className="nombre">{persona.name}</p>
                  <p>{persona.character}</p>
                </div>
              </ItemCast>
            </SwiperSlide>
          ))}
        </StyledSection>
      )}
    </>
  );
};

export default Cast;
