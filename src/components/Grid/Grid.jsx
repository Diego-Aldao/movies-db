import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;

const Grid = ({ children, className }) => {
  return <StyledGrid className={className}>{children}</StyledGrid>;
};

export default Grid;
