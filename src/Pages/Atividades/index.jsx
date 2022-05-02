import Footer from "../../components/Footer";

import Tarefas from "../../components/Tarefas";

import HeaderMenu from "../../components/HeaderMenu";
import { ContainerAtividade } from "./style";

const Atividades = () => {
  return (
    <ContainerAtividade>
      <HeaderMenu />
      <Tarefas />
      <Footer />
    </ContainerAtividade>
  );
};
export default Atividades;
