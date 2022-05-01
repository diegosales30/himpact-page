import { useHistory } from "react-router-dom";
import { FiAlignCenter, FiSearch } from "react-icons/fi";
import { ContainerMenu } from "./style";
import { useState } from "react";

const HeaderMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  const handleNavigation = (path) => {
    setIsActive(!isActive);
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
      <div>
        <button page={"feed"} onClick={() => handleNavigation("/home")}>Feed</button>
        <button page={"atividade"} onClick={() => handleNavigation("/atividades")}>
          Atividades
        </button>
      </div>
    </ContainerMenu>
  );
};
export default HeaderMenu;
