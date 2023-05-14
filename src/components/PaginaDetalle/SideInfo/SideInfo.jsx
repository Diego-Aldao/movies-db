import styled from "styled-components";
import External from "./External";
import AboutMedia from "./AboutMedia";

const StyledAside = styled.aside`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

const SideInfo = ({ data }) => {
  const { homepage, media_type, external_ids } = data;

  return (
    <StyledAside>
      <External externalData={external_ids} homepage={homepage} />
      <AboutMedia mediaData={data} media_type={media_type} />
    </StyledAside>
  );
};

export default SideInfo;
