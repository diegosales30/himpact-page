import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 130px;
  position: fixed;
  margin-left: 50px;
  box-shadow: 1px 1px 10px 1px rgba(19, 19, 19, 0.466);
  background: #f3f3f3;
  border-radius: 10px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 15px;
    color: #393939;
  }
  section {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    button {
    }
  }
`;
