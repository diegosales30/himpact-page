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
    password: yup
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

  //const history = useHistory();

  const onSubmit = ({ name, cpf, email, password }) => {
    const user = { name, cpf, email, password };
    console.log(user);
    // axios
    //   .post("endpoint aqui", user)
    //   .then((_) => {
    //     toast.success("Conta criada com sucesso");
    //     return history.push("/login");
    //   })
    //   .catch((err) => {
    //     toast.error("Erro ao criar conta, tente outro email");
    //     console.log(err);
    //   });
  };
  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.email?.message}</p>
        <InputContainer>
          <FiUser />
          <input type="text" placeholder="Email ou CNPJ" />
        </InputContainer>

        <InputContainer>
          <p>{errors.password?.message}</p>
          <FiLock />
          <input type="password" placeholder="Senha" />
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
