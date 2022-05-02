import { useState } from "react";
import { useHistory } from "react-router-dom";
import modulo1 from "../../assets/modulo1.png";
import modulo2 from "../../assets/modulo2.png";
import modulo3 from "../../assets/modulo3.png";
import modulo4 from "../../assets/modulo4.png";
import "./index.css";
import { ContainerCurso, ContainerTarefas } from "./style";
import HeaderMenu from "../../components/HeaderMenu";
import Footer from "../../components/Footer";

const PageCurso = () => {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  const handleNavigation = (path) => {
    setIsActive(!isActive);
    return history.push(path);
  };

  return (
    <ContainerCurso>
      <HeaderMenu />
      <h1 className="titulo">Curso Empreendedorismo</h1>
      <ContainerTarefas className="listaTarefas">
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/VVD96G8n4A0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Pontos que você adquiri ao concluir este Curso = 50 HIM</h3>
      </ContainerTarefas>
      <div className="cursosCapacitacao">
        <h1 className="modulos">Módulos:</h1>
        <div className="cursosConteiner">
          <img
            className="itemCurso"
            src={modulo1}
            alt="banner"
            onClick={() => handleNavigation("/page-curso")}
          />
          <img
            className="itemCurso"
            src={modulo2}
            alt="banner"
            onClick={() => handleNavigation("/page-curso")}
          />
          <img
            className="itemCurso"
            src={modulo3}
            alt="cursos"
            onClick={() => handleNavigation("/page-curso")}
          />
          <img
            className="itemCurso"
            src={modulo4}
            alt="cursos"
            onClick={() => handleNavigation("/page-curso")}
          />
        </div>
      </div>
      <Footer />
    </ContainerCurso>
  );
};
export default PageCurso;
