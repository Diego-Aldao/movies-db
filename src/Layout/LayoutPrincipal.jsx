import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LayoutPrincipal = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPrincipal;
