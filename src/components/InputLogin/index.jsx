import { Link } from "react-router-dom";
import { ContainerForm } from "./style";

const InputLogin = () => {
  return (
    <ContainerForm>
      <form>
        <input type="text" placeholder="Email ou CNPJ" />
        <input type="password" placeholder="Senha" />
        <Link to="/register">Esqueceu a senha?</Link>

        <div>
          <button>Entrar</button>
        </div>
      </form>
    </ContainerForm>
  );
};
export default InputLogin;
