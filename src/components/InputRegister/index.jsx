import { Link } from "react-router-dom";
import { ContainerForm } from "./style";

const InputRegister = () => {
  return (
    <ContainerForm>
      <form action="">
        <label htmlFor="">Nome completo</label>
        <input type="text" placeholder="Nome" />
        <label htmlFor="">Digite seu CPF</label>
        <input type="text" placeholder="CPF" />
        <label htmlFor="">Digite seu email</label>
        <input type="text" placeholder="Email" />
        <label htmlFor="">Digite sua senha</label>
        <input type="password" placeholder="Senha" />
        <button>Cadastrar</button>
        <div>
          <Link to="/login">Faça login</Link>
        </div>
      </form>
    </ContainerForm>
  );
};
export default InputRegister;
