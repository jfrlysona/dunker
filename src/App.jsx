import StreetVibe from "./assets/Components/StreetVibe";
import CarouselSlider from "./assets/Components/CarouselSlider"
import TrendingNow from "./assets/Components/TrendingNow";
import Section2 from "./assets/Section2";
import Header from "./assets/components/Header";
import Section3 from "./assets/components/Section3";
import Footer from "./components/Footer";
import "./style.scss";
function App() {
  return (
    <>
      <Header />
      <Section2 />
      <Section3 />
      <TrendingNow />
      <StreetVibe />
      <CarouselSlider/>
      <Footer></Footer>
    </>
  );
}

export default App;
