import styled from "styled-components";

export const ContainerForm = styled.div`
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: column;
    input {
      margin-top: 17px;
      width: 262px;
      height: 41px;

      border: 1.5px solid var(--grey05);
      box-sizing: border-box;
      border-radius: 8px;
      padding: 12px;
      &::placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        /* identical to box height */

        color: var(--grey10);

        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 8px;
      }
    }
    a {
      p
      width: 105px;
      height: 15px;
      left: 206px;
      top: 508px;
      margin-top: 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: right;

      color:var(--green);
    }

    button {
      display: flex;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      padding: 12px 8px;
      border: none;
      width: 262px;
      height: 44px;

      background:var(--green);
      border-radius: 8px;
      /* font btn */  
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: var(--white);

    }
  }
`;
