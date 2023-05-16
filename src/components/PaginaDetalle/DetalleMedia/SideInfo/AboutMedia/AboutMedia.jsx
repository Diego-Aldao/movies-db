import styled from "styled-components";
import InfoMovie from "./InfoMovie";
import InfoTv from "./InfoTv";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    display: flex;
    gap: 5px;
    flex-direction: column;
    span:first-child {
      color: var(--color-texto-principal);
      font-weight: 500;
    }
    span {
      text-transform: capitalize;
      font-size: 14px;
    }
    .img-canal {
      position: block;
      width: 80px;
      img {
        width: 100%;
        height: 100%;
        filter: invert(100%);
        object-fit: contain;
      }
    }
  }
`;

const AboutMedia = ({ mediaData, media_type }) => {
  return (
    <>
      {media_type === "movie" ? (
        <InfoMovie dataMovie={mediaData} />
      ) : (
        <InfoTv dataTv={mediaData} />
      )}
    </>
  );
};

export default AboutMedia;
