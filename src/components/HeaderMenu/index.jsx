import { useHistory } from "react-router-dom";
import { FiAlignCenter, FiSearch } from "react-icons/fi";
import { ContainerMenu } from "./style";

const HeaderMenu = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <ContainerMenu>
      <section>
        <div>
          <FiAlignCenter />
        </div>
        <h4>Himpact</h4>
        <div>
          <FiSearch />
        </div>
      </section>
      <aside>
        <div
          className="item-navegacao"
          onClick={() => handleNavigation("/home")}
        >
          Feed
        </div>
        <div
          className="item-navegacao-ativo"
          onClick={() => handleNavigation("/atividades")}
        >
          Atividades
        </div>
      </aside>
    </ContainerMenu>
  );
};
export default HeaderMenu;
