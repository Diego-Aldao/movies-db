import LayoutPrincipal from "../Layout/LayoutPrincipal";
import Main from "../components/PaginaUsuario/Main";
import Header from "../components/PaginaUsuario/Header";
import SectionUsuario from "../components/PaginaUsuario/SectionUsuario";
import useFavoritos from "../hooks/useFavoritos";
import useGuardados from "../hooks/useGuardados";
import SinContenido from "../components/PaginaUsuario/SinContenido";
import ScrollTop from "../components/ScrollTop";

const PaginaUsuario = () => {
  const { favoritos, guardarFavorito } = useFavoritos();
  const { guardados, añadirGuardado } = useGuardados();

  const hayContenido = favoritos.length >= 1 || guardados.length >= 1;
  return (
    <LayoutPrincipal>
      <ScrollTop />
      <Header />
      <Main>
        {hayContenido ? (
          <>
            <SectionUsuario
              interaccion={favoritos}
              añadirGuardado={añadirGuardado}
              guardarFavorito={guardarFavorito}
              titulo={"favoritos"}
            />
            <SectionUsuario
              interaccion={guardados}
              guardarFavorito={guardarFavorito}
              añadirGuardado={añadirGuardado}
              titulo={"guardados"}
            />
          </>
        ) : (
          <SinContenido />
        )}
      </Main>
    </LayoutPrincipal>
  );
};

export default PaginaUsuario;
