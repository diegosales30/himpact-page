import { BoxLogo, ContainerRegisterUser } from "./style";
import logo from "../../assets/logo.png";
import InputRegister from "../InputRegister";

const RegisterUserPage = () => {
  return (
    <ContainerRegisterUser>
      <BoxLogo>
        <img src={logo} alt="logo" />
      </BoxLogo>
      <InputRegister />
    </ContainerRegisterUser>
  );
};
export default RegisterUserPage;
