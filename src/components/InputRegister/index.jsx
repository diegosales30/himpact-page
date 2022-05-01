import { Link } from "react-router-dom";
import { ContainerForm } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const InputRegister = () => {
  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .matches(
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        "Apenas números"
      )
      .max(11, "no máximo 11 números"),
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

  const onSubmit = (data) => {
    //const user = { nome, cpf, email, senha };

    console.log(data); //http://localhost:4000/register
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Conta criada com sucesso");
        return history.push("/login");
      })
      .catch((err) => {
        toast.error("Erro ao criar conta, tente outro email");
        console.log(err);
      });
  };
  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome completo
          <p>{errors.nome?.message}</p>
        </label>
        <input type="text" placeholder="Nome" {...register("nome")} />
        <label>
          Digite seu CPF <p>{errors.cpf?.message}</p>
        </label>
        <input type="text" placeholder="CPF" {...register("cpf")} />
        <label>
          Digite seu email <p>{errors.email?.message}</p>
        </label>
        <input type="text" placeholder="Email" {...register("email")} />
        <label>
          Digite sua senha <p>{errors.senha?.message}</p>
        </label>
        <input type="password" placeholder="Senha" {...register("senha")} />
        <button type="submit">Cadastrar</button>
        <div>
          <Link to="/login">Faça login</Link>
        </div>
      </form>
    </ContainerForm>
  );
};
export default InputRegister;
