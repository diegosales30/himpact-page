import styled from "styled-components";

import logo from "../../assets/logo.png";

export const ContainerLanding = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 420px;
  max-height: 896px;
  margin: auto;
  background: url(${logo}) no-repeat center, var(--green);
`;
