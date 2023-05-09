import EstilosGlobales from "../styles/EstilosGlobales";
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
