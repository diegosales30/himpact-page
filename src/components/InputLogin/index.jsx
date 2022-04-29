import { Link } from "react-router-dom";
import { ContainerForm, InputContainer } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const InputLogin = () => {
  return (
    <ContainerForm>
      <form>
        <InputContainer>
          <FiUser />
          <input type="text" placeholder="Email ou CNPJ" />
        </InputContainer>
        <InputContainer>
          <FiLock />
          <input type="password" placeholder="Senha" />
        </InputContainer>

        <Link to="/register">Esqueceu a senha?</Link>

        <div>
          <button>Entrar</button>
        </div>
      </form>
    </ContainerForm>
  );
};
export default InputLogin;
