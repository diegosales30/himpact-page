import FeedCarousel1 from "../../components/Carrossel";
import FeedCarousel2 from "../../components/Carrossel2";
import Feeds from "../../components/Feeds";
import Footer from "../../components/Footer";
import HeaderMenu from "../../components/HeaderMenu";

const Home = () => {
  return (
    <>
      <HeaderMenu />
      <FeedCarousel1 />
      <FeedCarousel2 />
      <Feeds />
      <Footer />
    </>
  );
};
export default Home;
