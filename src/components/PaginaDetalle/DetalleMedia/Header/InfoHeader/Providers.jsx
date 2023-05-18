import styled from "styled-components";

const StyledProviders = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  p {
    color: var(--color-texto-principal);
    font-weight: 600;
  }
  p:first-letter {
    text-transform: capitalize;
  }
  img {
    width: 92px;
    height: 40px;
  }
`;

const Providers = ({ providers }) => {
  return (
    <>
      {providers?.AR?.free && (
        <StyledProviders>
          <li>
            <p>ver en:</p>
          </li>

          {providers.AR.free.map((provider) => (
            <li key={provider.provider_id}>
              <img
                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                alt=""
              />
            </li>
          ))}
        </StyledProviders>
      )}
    </>
  );
};

export default Providers;
