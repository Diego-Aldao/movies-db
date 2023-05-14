import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  width: 100%;
  gap: 10px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const External = ({ externalData, homepage }) => {
  const externalDataFormated = Object.entries(externalData).filter(
    (item) =>
      item[0] === "instagram_id" ||
      item[0] === "twitter_id" ||
      item[0] === "facebook_id"
  );
  const newExternalData = externalDataFormated.map((item) => {
    return {
      plataforma: item[0].replaceAll("_id", ""),
      link: item[1],
    };
  });

  return (
    <StyledList>
      {newExternalData.map(({ plataforma, link }, index) => (
        <React.Fragment key={index}>
          {link !== null && (
            <li>
              <a
                href={`https://www.${plataforma}.com/${link}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={`mdi:${plataforma}`} />
              </a>
            </li>
          )}
        </React.Fragment>
      ))}
      {homepage && (
        <li>
          <a href={homepage} target="_blank" rel="noreferrer">
            <Icon icon="mdi:link-variant" />
          </a>
        </li>
      )}
    </StyledList>
  );
};

export default External;
