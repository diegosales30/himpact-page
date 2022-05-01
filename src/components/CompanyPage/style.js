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
  height: 166px;
  background: var(--whiteF3);
  box-shadow: 3px 11px 42px -7px rgba(128, 128, 128, 0.3);
  padding: 0px 10px;

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
export const ContainerPartnerCompany = styled.div`
  width: 360px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto 60px;

  overflow-y: scroll;
  section {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    figure {
      margin-left: 35px;
      width: 130px;
      height: 80px;

      img {
        cursor: pointer;
        margin: 0;
        width: 120px;
        height: 120px;
        border-radius: 10px;
      }
      h1 {
        margin-left: 10px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: #393939;
      }
    }
  }
`;
