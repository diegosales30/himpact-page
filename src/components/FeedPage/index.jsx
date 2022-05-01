import FeedCarousel1 from "../../components/Carrossel";
import FeedCarousel2 from "../../components/Carrossel2";
import Feeds from "../../components/Feeds";
import Footer from "../../components/Footer";
import { ContainerFeed } from "./style";

const FeedPage = () => {
  return (
    <ContainerFeed>
      <FeedCarousel1 />
      <FeedCarousel2 />
      <Feeds />
      <Footer />
    </ContainerFeed>
  );
};
export default FeedPage;
