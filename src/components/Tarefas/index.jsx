import curso1 from "../../assets/curso1.png";
import curso2 from "../../assets/curso2.png";
import curso3 from "../../assets/curso3.png";
import curso4 from "../../assets/curso4.png";
import './index.css';

const Tarefas = () => {
  return (
    <>
      <div className="listaTarefas">
        <h3>
          Complete suas atividades diárias de hoje para garantir créditos:
        </h3>
        <div className="itemTarefa">Regular a água do banho = 300 HIM</div>
        <div className="itemTarefa">
          Separar o lixo e destinar para a reciclagem = 300 HIM
        </div>
        <div className="itemTarefa">Reutilizar potes = 100 HIM</div>
        <div className="itemTarefa">Utilizar ecobags = 300 HIM</div>
        <div className="itemTarefa">
          Não utilizar copos plásticos - troque por uma caneca/xicara = 100 HIM
        </div>
      </div>

      <div className="cursosCapacitacao">
        <h3>
          Cursos para sua capacitação, ajudar o meio ambiente e receber
          créditos:
        </h3>
        <img className="itemCurso" src={curso1} alt="banner" />
        <img className="itemCurso" src={curso2} alt="banner" />
        <img className="itemCurso" src={curso3} alt="cursos" />
        <img className="itemCurso" src={curso4} alt="cursos" />
      </div>
    </>
  );
};
export default Tarefas;
