import { BoxLogo, ContainerRegisterUser } from "./style";
import logo from "../../assets/logo.png";
import InputRegister from "../InputRegister";
import { AnimationContainer } from "../../Pages/Login/style";

const RegisterUserPage = () => {
  return (
    <AnimationContainer>
      <ContainerRegisterUser>
        <BoxLogo>
          <img src={logo} alt="logo" />
        </BoxLogo>
        <InputRegister />
      </ContainerRegisterUser>
    </AnimationContainer>
  );
};
export default RegisterUserPage;
