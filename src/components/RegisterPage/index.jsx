import { ContainerRegister, BoxLogo, BtnRegiterGoogle } from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RegisterPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <ContainerRegister>
      <BoxLogo>
        <img src={logo} alt="logo" />
      </BoxLogo>
      <div>
        <p>
          Informe se você deseja se cadastrar como empresa ou pessoa física.
        </p>
      </div>
      <section>
        <button onClick={() => handleNavigation("/register/user")}>
          Cadastrar como Usuario
        </button>
        <button onClick={() => handleNavigation("/register/company")}>
          Cadastrar como Empresa
        </button>
        <BtnRegiterGoogle>Cadastrar com Google</BtnRegiterGoogle>
      </section>
      <aside>
        <Link to="/login">Faça login</Link>
      </aside>
    </ContainerRegister>
  );
};
export default RegisterPage;
