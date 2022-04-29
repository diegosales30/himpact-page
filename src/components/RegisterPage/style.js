import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 400px;
  margin: auto;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    p {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 24px;
      width: 300px;
      color: var(--green);
    }
  }
  section {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 35px;
      width: 262px;
      height: 44px;
      left: 49px;
      top: 555px;
      border: none;
      background: var(--green);
      border-radius: 8px;

      /* font btn */
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;

      color: var(--white);
    }
  }
  aside {
    margin-top: 60px;
    a {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 15px;

      text-align: right;

      color: var(--green);
    }
  }
`;
export const BtnRegiterGoogle = styled.button`
  background: var(--red) !important;
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
