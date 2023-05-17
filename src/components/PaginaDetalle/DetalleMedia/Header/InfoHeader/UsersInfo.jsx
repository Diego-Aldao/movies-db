import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledUsersInfo = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }

  .valoracion {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      color: #ffd900;
    }
  }
  .interaccion {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const UsersInfo = ({ userInfo }) => {
  const { vote_average, vote_count } = userInfo;

  const votoFixed = vote_average.toFixed(1);

  return (
    <StyledUsersInfo>
      <div className="valoracion">
        <Icon icon="ic:round-star" />
        <span>{votoFixed}</span>
        <span>| {vote_count}</span>
      </div>
      <div className="interaccion">
        <Icon icon="ic:round-favorite-border" />
        <Icon icon="ic:outline-bookmark-added" display={"none"} />
        <Icon icon="ic:outline-share" />
        <Icon icon="ic:outline-bookmark-add" />
      </div>
    </StyledUsersInfo>
  );
};

export default UsersInfo;
