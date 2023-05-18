import EstilosGlobales from "../styles/EstilosGlobales";
import PaginaBusqueda from "./pages/PaginaBusqueda";
import PaginaDetalle from "./pages/PaginaDetalle";
import PaginaListas from "./pages/PaginaListas";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal />,
  },
  {
    path: "/peliculas/:lista",
    element: <PaginaListas />,
  },
  {
    path: "/programas-de-television/:lista",
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
]);

function App() {
  return (
    <>
      <EstilosGlobales />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
