import "./App.css";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Experiance from "./components/experiance/Experiance";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Experiance />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
