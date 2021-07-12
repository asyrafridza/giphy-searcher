import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Default.css";

const Default = ({ children, savedGIFCount = 0, onChangePage }) => {
  const handlePageChange = (page) => onChangePage(page);

  return (
    <div className="default-container">
      <header>
        <Header savedGIFCount={savedGIFCount} onChangePage={handlePageChange} />
      </header>
      <main>
        <div className="main">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Default;
