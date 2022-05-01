import { ModalContainer } from "./style";
import "./style.css";
const ModalPromo = ({ isOn, setIsOn }) => {
  return (
    <ModalContainer>
      <h1>Deseja efetuar a troca de pontos pelo benefício?</h1>
      <section>
        <button className="btnAcept">Sim, desejo</button>
        <button onClick={() => setIsOn(!isOn)} className="btnSair">
          Sair
        </button>
      </section>
    </ModalContainer>
  );
};
export default ModalPromo;
