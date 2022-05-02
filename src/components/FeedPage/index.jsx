import FeedCarousel1 from "../../components/Carrossel";
import FeedCarousel2 from "../../components/Carrossel2";
import Feeds from "../../components/Feeds";
import Footer from "../../components/Footer";
import { ContainerFeed } from "./style";
import "./style.css";

const FeedPage = () => {
  return (
    <div className="containerFeed">
      <FeedCarousel1 />
      <FeedCarousel2 />
      <Feeds />
      <Footer />
    </div>
  );
};
export default FeedPage;
