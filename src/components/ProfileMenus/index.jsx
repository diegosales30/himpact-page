import { ContainerProfileMenus } from "./style";

import { MdCreditCard, MdOutlineHelpOutline, MdLogout } from "react-icons/md";
import { RiArrowRightLine, RiBallPenLine, RiGroupLine } from "react-icons/ri";
import { VscBellDot, VscGear } from "react-icons/vsc";
import { SiDatabricks } from "react-icons/si";
import "./style.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfileMenus = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <ContainerProfileMenus>
      <section>
        <aside>
          <MdCreditCard className="iconeMenu" />
          <p>Seus créditos e benefícios</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <RiBallPenLine className="iconeMenu" />
          <p>Editar perfil</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <RiGroupLine className="iconeMenu" />
          <p>Convidar amigos</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <VscBellDot className="iconeMenu" />
          <p>Notificações</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <SiDatabricks className="iconeMenu" />
          <p>Empresas parceiras</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <MdOutlineHelpOutline className="iconeMenu" />
          <p>Ajuda</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <VscGear className="iconeMenu" />
          <p>Configurações</p>
          <RiArrowRightLine className="iconeMenu" />
        </aside>
      </section>
      <section>
        <aside>
          <MdLogout className="iconeMenu" />
          <p>Logout</p>
          <RiArrowRightLine
            onClick={() => handleNavigation("/")}
            className="iconeMenu"
          />
        </aside>
      </section>
    </ContainerProfileMenus>
  );
};
export default ProfileMenus;
