import { ContainerCompanyDetails, HeaderCompanyDetails } from "./style";
import { RiArrowLeftLine, RiSearchLine } from "react-icons/ri";
import "./style.css";
const CompanyDetailsPage = () => {
  return (
    <ContainerCompanyDetails>
      <HeaderCompanyDetails>
        <section>
          <RiArrowLeftLine className="iconArrow" />
        </section>
        <section>
          <RiSearchLine className="iconSearch" />
        </section>
      </HeaderCompanyDetails>
      <div>
        <p>
          O Ifood promove entregas mais sustenáveis, e ações na intenção de
          diminuir o enorme impacto ambiental...Ler mais
        </p>
        <h3>Benefícios oferecidos</h3>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </ContainerCompanyDetails>
  );
};
export default CompanyDetailsPage;
