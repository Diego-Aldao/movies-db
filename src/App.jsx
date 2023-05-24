import EstilosGlobales from "../styles/EstilosGlobales";
import { FavoritosContextProvider } from "./Context/FavoritosContext";
import { GuardadosContextProvider } from "./Context/GuardadosContext";
import PaginaBusqueda from "./pages/PaginaBusqueda";
import PaginaColeccion from "./pages/PaginaColeccion";
import PaginaDetalle from "./pages/PaginaDetalle";
import PaginaListas from "./pages/PaginaListas";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaUsuario from "./pages/PaginaUsuario";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal />,
  },
  {
    path: "/películas/:lista",
    element: <PaginaListas />,
  },
  {
    path: "/programas-de-televisión/:lista",
    element: <PaginaListas />,
  },
  {
    path: "/celebridades/:lista",
    element: <PaginaListas />,
  },
  {
    path: "/detalle/:tipo/:id",
    element: <PaginaDetalle />,
  },
  {
    path: "/busqueda/:media/:query",
    element: <PaginaBusqueda />,
  },
  {
    path: "/usuario",
    element: <PaginaUsuario />,
  },
  {
    path: "/coleccion/:id",
    element: <PaginaColeccion />,
  },
]);

function App() {
  return (
    <GuardadosContextProvider>
      <FavoritosContextProvider>
        <EstilosGlobales />
        <RouterProvider router={router} />
      </FavoritosContextProvider>
    </GuardadosContextProvider>
  );
}

export default App;
