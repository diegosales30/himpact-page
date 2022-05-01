import {
  ContainerCompany,
  ContainerPartnerCompany,
  HeaderCompany,
} from "./style";
import miniLogo from "../../assets/miniLogo.png";
import Footer from "../Footer";
import "./style.css";
import { RiArrowLeftLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

import ifood from "../../assets/imgCompany/ifoodImgpng.png";
import ciet from "../../assets/imgCompany/ci&t.png";
import fundaoEstudar from "../../assets/imgCompany/fundacaoEstudar.png";
import stoneTech from "../../assets/imgCompany/stoneTech.png";
import totvs from "../../assets/imgCompany/totvs.png";
import memed from "../../assets/imgCompany/memed.png";
import abstartups from "../../assets/imgCompany/abstartups.png";

const CompanyPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <ContainerCompany>
      <HeaderCompany>
        <RiArrowLeftLine
          onClick={() => handleNavigation("/perfil/user")}
          className="companyPage"
        />
        <h1>Empresas</h1>
        <img src={miniLogo} alt="logo" />
      </HeaderCompany>
      <ContainerPartnerCompany>
        <section>
          <figure onClick={() => handleNavigation("/company/details")}>
            <img src={ifood} alt="ifoof" />
            <h1>Ifood</h1>
          </figure>
          <figure>
            <img src={ciet} alt="ciet" />
            <h1>CI&T</h1>
          </figure>
          <figure>
            <img src={fundaoEstudar} alt="fundaoEstudar" />
            <h1>Fundção Estudar</h1>
          </figure>
          <figure>
            <img src={stoneTech} alt="stoneTech" />
            <h1>Stone Tech</h1>
          </figure>
          <figure>
            <img src={totvs} alt="totvs" />
            <h1>TOTVS</h1>
          </figure>
          <figure>
            <img src={memed} alt="memed" />
            <h1>Memed</h1>
          </figure>
          <figure>
            <img src={abstartups} alt="abstartups" />
            <h1>Abstartups</h1>
          </figure>
        </section>
      </ContainerPartnerCompany>
      <Footer />
    </ContainerCompany>
  );
};

export default CompanyPage;
