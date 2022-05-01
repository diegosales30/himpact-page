import styled from "styled-components";

export const ContainerTarefas = styled.div`
  width: 95%;
  height: 300px;
  background-color: var(--green);
  border-radius: 5px;
  padding: 10px;
  margin-top: 18vh;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.384);
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    text-align: center;
    color: rgb(12, 12, 12);
  }
`;
export const ListTarefas = styled.div`
  width: 90vw;
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
