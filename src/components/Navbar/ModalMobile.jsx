import NavLink from "./NavLink";

import styled from "styled-components";

const StyledModal = styled.div`
  width: 100%;
  background: var(--bg-principal);
  width: 100%;
  height: calc(100vh - 50px);
  min-height: 500px;
  display: ${({ modalIsVisible }) => (modalIsVisible ? "flex" : "none")};
  flex-direction: column;
  padding-inline: 10px;
  gap: 20px;
  padding-top: 20px;
  span {
    text-transform: capitalize;
    color: var(--color-texto-principal);
    font-size: 18px;
  }
`;
const ModalMobile = ({ modalIsVisible, setModalIsVisible }) => {
  return (
    <StyledModal modalIsVisible={modalIsVisible}>
      <NavLink
        setModalIsVisible={setModalIsVisible}
        navigateTo={{
          categoria: "movie",
          subCategoria: "popular",
          titulo: "peliculas",
        }}
      />
      <NavLink
        setModalIsVisible={setModalIsVisible}
        navigateTo={{
          categoria: "tv",
          subCategoria: "popular",
          titulo: "programas-de-television",
        }}
      />
      <NavLink
        setModalIsVisible={setModalIsVisible}
        navigateTo={{
          categoria: "person",
          subCategoria: "popular",
          titulo: "celebridades",
        }}
      />
    </StyledModal>
  );
};

export default ModalMobile;
