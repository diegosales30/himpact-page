import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import curso1 from "../../assets/curso1.png";
import curso2 from "../../assets/curso2.png";
import curso3 from "../../assets/curso3.png";
import curso4 from "../../assets/curso4.png";
import "./index.css";
import { ContainerTarefas, ListTarefas } from "./style";

const Tarefas = () => {
  const [todo, setTodo] = useState([]);
  // const [obj, setObjs] = useState([todo]);
  // //let obj = [];
  // let obj1 = [...todo];

  useEffect(() => {
    axios
      .get("http://localhost:4000/tarefas")
      .then((res) => {
        setTodo(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(todo);
  return (
    <>
      <ContainerTarefas className="listaTarefas">
        <h3>Conclua atividades diárias para ganhar pontos:</h3>
        {todo.map((tarefa) => (
          <ListTarefas key={tarefa.ID}>
            <h2>{tarefa.TITULO}</h2>
            <p>{tarefa.DESCRICAO}</p>
          </ListTarefas>
        ))}
      </ContainerTarefas>
      <div className="cursosCapacitacao">
        <h3>
          Cursos para sua capacitação, ajudar o meio ambiente e receber
          créditos:
        </h3>
        <div className="cursosConteiner">
          <img className="itemCurso" src={curso1} alt="banner" />
          <img className="itemCurso" src={curso2} alt="banner" />
          <img className="itemCurso" src={curso3} alt="cursos" />
          <img className="itemCurso" src={curso4} alt="cursos" />
        </div>
      </div>
    </>
  );
};
export default Tarefas;
