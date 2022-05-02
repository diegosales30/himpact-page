import styled from "styled-components";

export const ContainerMenu = styled.div`
  position: fixed;
  width: 100vw;
  max-width: 420px;
  height: 140px;
  margin-top: 20px;
  margin: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;
  box-shadow: 1px 0px 10px 1px rgba(8, 121, 8, 0.348);
  z-index: 3;
  section {
    width: 100vw;
    max-width: 420px;
    display: flex;
    justify-content: space-around;
    height: auto;
    font-size: x-large;
    margin-bottom: 25px;
    h4 {
      color: var(--green);
    }
  }

  div {
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    button {
      width: 100px;
      height: 50px;
      border: none;
      background: white;
      border: 1px solid red {

      }
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(57, 57, 57, 0.6);

      &:hover {
        cursor: pointer;
        border-bottom: 3px solid var(--green);
      }
    }
  }
`;
