import RegisterUserPage from "../../components/RegisterUserPage";
import { errorTag } from "./style";

const RegisterUser = () => {
  return (
    <>
      <RegisterUserPage errorTag={errorTag} />
    </>
  );
};
export default RegisterUser;
