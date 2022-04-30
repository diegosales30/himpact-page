import FeedCarousel1 from "../../components/Carrossel";
import FeedCarousel2 from "../../components/Carrossel2";
import Feeds from "../../components/Feeds";
import Footer from "../../components/Footer";
import { FiAlignCenter, FiSearch} from "react-icons/fi";
import './index.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <div className="cabecalho">
        <div><FiAlignCenter /></div>
        <div className="titulo">Himpact</div>
        <div><FiSearch/></div>
      </div>
      <div className="navegacao">
        <div className="item-navegacao-feed">Feed</div>
        <div> </div>
        <div className="item-navegacao" onClick={() => handleNavigation("/atividades")}>
            Atividades
        </div>
      </div>
      <FeedCarousel1/>
      <FeedCarousel2 />
      <Feeds />
      <Footer />
    </>
  );
};
export default Home;
