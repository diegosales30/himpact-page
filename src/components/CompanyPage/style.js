import styled from "styled-components";

export const ContainerCompany = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderCompany = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 166px;
  background: var(--whiteF3);
  box-shadow: 3px 11px 42px -7px rgba(128, 128, 128, 0.3);
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;

    color: var(--green);
  }
`;
