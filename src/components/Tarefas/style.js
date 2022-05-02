import styled from "styled-components";

export const ContainerTarefas = styled.div`
  width: 100vw;
  height: 300px;
  max-width: 420px;
  margin: auto;
  background-color: var(--secundary-color);
  border-radius: 5px;
  padding: 10px;
  margin: 160px auto 10px;
  align-items: center;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.384);
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    text-align: center;
    color: var(--primary-color);
  }
`;
export const ListTarefas = styled.div`
  width: 390px;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;

  margin-top: 8px;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    color: #ffffff;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    text-align: right;
    color: #ffffff;
  }
`;
