import styled from "styled-components";
import logoIfood from "../../assets/imgCompany/ifoodbackground.png";
export const ContainerCompanyDetails = styled.div`
  width: 100vw;

  max-width: 400px;
  margin: auto;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.418);
`;

export const HeaderCompanyDetails = styled.div`
  width: 100vw;
  height: 250px;
  max-width: 400px;
  background: url(${logoIfood}) no-repeat center #ea1d2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
`;
