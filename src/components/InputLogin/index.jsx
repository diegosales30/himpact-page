import { Link } from "react-router-dom";
import { ContainerForm, InputContainer } from "./style";
import { FiUser, FiLock } from "react-icons/fi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const InputLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    senha: yup
      .string()
      .min(8, "Mínimo  de 8 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = ({ email, senha }) => {
    const user = { email, senha };

    console.log(user);
    axios
      .get("localhost:3001/clientes", user)
      .then((res) => {
        console.log(res);
        toast.success("Logado com sucesso");
        return history.push("/");
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos");
        console.log(err);
      });
  };
  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>{errors.email?.message}</p>
        </label>
        <InputContainer>
          <FiUser />
          <input
            type="text"
            placeholder="Email ou CNPJ"
            {...register("email")}
          />
        </InputContainer>
        <label>
          <p>{errors.senha?.message}</p>
        </label>
        <InputContainer>
          <FiLock />
          <input type="password" placeholder="Senha" {...register("senha")} />
        </InputContainer>

        <Link to="/register">Esqueceu a senha?</Link>

        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </ContainerForm>
  );
};
export default InputLogin;
