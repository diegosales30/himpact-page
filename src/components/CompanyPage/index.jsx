import { ContainerCompany, HeaderCompany } from "./style";
import miniLogo from "../../assets/miniLogo.png";
import Footer from "../Footer";
import "./style.css";
import { RiArrowLeftLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
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
      <div>
        <figure>
          <img src="" alt="" />
        </figure>
        <figure>
          <img src="" alt="" />
        </figure>
        <figure>
          <img src="" alt="" />
        </figure>
        <figure>
          <img src="" alt="" />
        </figure>
        <figure>
          <img src="" alt="" />
        </figure>
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
      <Footer />
    </ContainerCompany>
  );
};

export default CompanyPage;
