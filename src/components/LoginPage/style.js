import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 420px;
  max-height: 896px;
  margin: auto;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    text-align: center;
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: var(--green);
    }
    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      margin-top: 8px;
      color: var(--green);
    }
  }
  div {
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: var(--green);
      margin-top: 20px;
    }
    span {
      padding: 15px;
    }
  }
`;
export const ButtonRegister = styled.button`
  width: 262px;
  height: 44px;
  left: 49px;
  top: 663px;
  border: 2px solid var(--green);
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 30px;
  /* font btn */

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: var(--green);
  background: var(--white);
  /* &:hover {
    background: var(--green);
    color: var(--white);
  } */
`;

export const BoxLogo = styled.div`
  width: 100vw;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--green);
  }
`;
