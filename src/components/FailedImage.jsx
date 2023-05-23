import styled from "styled-components";
import imagePlaceholder from "../assets/image-placeholder.svg";

const StyledContenedor = styled.div`
  background: ${({ background }) => `url(${background})`} no-repeat center / 50%;
  background-color: #474747;
  width: 100%;
  height: 100%;
`;

const FailedImage = () => {
  return <StyledContenedor background={imagePlaceholder}></StyledContenedor>;
};

export default FailedImage;
