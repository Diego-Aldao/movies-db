import Header from "../components/PaginaPrincipal/Header/Header";
import Tendencias from "../components/PaginaPrincipal/Tendencias/Tendencias";
import Estrenos from "../components/PaginaPrincipal/Estrenos/Estrenos";
import TopMovies from "../components/PaginaPrincipal/TopMovies/TopMovies";
import TopSeries from "../components/PaginaPrincipal/TopSeries/TopSeries";
import LayoutPrincipal from "../Layout/LayoutPrincipal";

const PaginaPrincipal = () => {
  return (
    <LayoutPrincipal>
      <Header />
      <Tendencias />
      <Estrenos />
      <TopMovies />
      <TopSeries />
    </LayoutPrincipal>
  );
};

export default PaginaPrincipal;
