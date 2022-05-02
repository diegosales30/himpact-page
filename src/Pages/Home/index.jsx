import FeedCarousel1 from "../../components/Carrossel";
import FeedCarousel2 from "../../components/Carrossel2";
import Feeds from "../../components/Feeds";
import Footer from "../../components/Footer";

import HeaderMenu from "../../components/HeaderMenu";
import { ContainerFeed } from "./style";

const Home = () => {
  return (
    <ContainerFeed>
      <HeaderMenu />
      <div>
        <FeedCarousel1 />
      </div>
      <div>
        <FeedCarousel2 />
      </div>

      <Feeds />
      <Footer />
    </ContainerFeed>
  );
};
export default Home;
