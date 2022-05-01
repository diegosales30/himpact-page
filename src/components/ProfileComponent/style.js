import styled from "styled-components";

export const ContainerProfile = styled.div`
  width: 393px;
  height: 166px;
  background: #f9f9f9;
  box-shadow: 3px 11px 42px -7px rgba(128, 128, 128, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    margin-left: 15px;
    section {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #393939;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;

        color: rgba(57, 57, 57, 0.6);
      }
    }
  }
  figure {
    cursor: pointer;
    margin-left: 10px;
    img {
      border: 2px solid var(--green);
      background: var(--green);
      width: 65px;
      height: 65px;
      border-radius: 55%;
    }
  }
  aside {
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-right: 10px;
    }
  }
`;
