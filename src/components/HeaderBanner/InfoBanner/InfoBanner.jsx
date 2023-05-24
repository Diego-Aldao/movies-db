import styled from "styled-components";

const StyledInfo = styled.div`
  max-width: 1400px;
  padding: 10px;
  margin: 0 auto;
  h2 {
    font-size: clamp(24px, 4vw, 40px);
  }
  .poster {
    display: none;
  }
  .contenedor-info {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    height: 100%;
    gap: 10px;
  }

  @media (min-width: 768px) {
    width: 100%;
    position: relative;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 15px;
    padding: 20px 24px;
    z-index: 2;
    .poster {
      display: block;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  @media (min-width: 1024px) {
    padding: 30px 50px;
    gap: 35px;
  }
`;

const InfoBanner = ({ imagen, children }) => {
  return (
    <StyledInfo>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${imagen}`}
          alt="poster de una pelicula o serie"
        />
      </div>
      <div className="contenedor-info">{children}</div>
    </StyledInfo>
  );
};

export default InfoBanner;
