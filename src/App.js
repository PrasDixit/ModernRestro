import { SlArrowUp } from "react-icons/sl";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const gotop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const App = () => (
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />

    <button className="gotopbtn" onClick={gotop}>
      <SlArrowUp size={24} />
    </button>
  </>
);

export default App;
