import styled from "styled-components";
import logoIfood from "../../assets/imgCompany/ifoodbackground.png";
export const ContainerCompanyDetails = styled.div`
  border: 1px solid red;
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
  section {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    color: #f9f9f9;
  }
`;
