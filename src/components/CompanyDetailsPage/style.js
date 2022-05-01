import styled from "styled-components";
import logoIfood from "../../assets/imgCompany/ifoodbackground.png";
export const ContainerCompanyDetails = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 400px;
  margin: auto;
`;

export const HeaderCompanyDetails = styled.div`
  width: 100vw;
  height: 200px;
  max-width: 400px;
  background: url(${logoIfood}) no-repeat center #ea1d2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
`;
