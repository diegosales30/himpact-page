import { BoxLogo, ButtonRegister, ContainerLogin } from "./style";
import logo from "../../assets/logo.png";
import InputLogin from "../InputLogin";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <ContainerLogin>
      <BoxLogo>
        <img src={logo} alt="logo" />
      </BoxLogo>
      <div>
        <h1>Himpact</h1>
        <h4>Hábitos que impactam</h4>
      </div>
      <InputLogin />
      <div>
        <p>
          _________________ <span>ou</span>_________________
        </p>
      </div>
      <div>
        <ButtonRegister onClick={() => handleNavigation("/register/page")}>
          Cadastre-se
        </ButtonRegister>
      </div>
    </ContainerLogin>
  );
};
export default LoginPage;
