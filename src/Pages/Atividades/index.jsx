import Footer from "../../components/Footer";
import { FiAlignCenter, FiSearch } from "react-icons/fi";
import "./index.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Tarefas from "../../components/Tarefas";

const Atividades = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <div className="cabecalho">
        <div>
          <FiAlignCenter />
        </div>
        <div className="titulo">Himpact</div>
        <div>
          <FiSearch />
        </div>
      </div>
      <div className="navegacao">
        <div
          className="item-navegacao"
          onClick={() => handleNavigation("/home")}
        >
          Feed
        </div>
        <div> </div>
        <span className="item-navegacao-ativo">Atividades</span>
      </div>
      <Tarefas />
      <Footer />
    </>
  );
};
export default Atividades;
