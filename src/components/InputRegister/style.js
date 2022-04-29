import styled from "styled-components";

export const ContainerForm = styled.div`
  margin-top: 30px;
  form {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      margin-left: 5px;
      color: var(--green);
      p{
        font-size: 10px;
        margin-left: 10px;
        display: inline;
        color: var(--red);
      }
    }
    input {
      
      width: 262px;
      height: 41px;
      margin: 0;
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
        color: var(--grey10);
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 8px;
      
    }
    
  }
  button {
      width: 262px;
      height: 44px;
      left: 49px;
      top: 555px;
      border: none;
      margin-top: 30px;
      background: var(--green);
      border-radius: 8px;

      /* font btn */
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: var(--white);
    }
    div {
    
    margin: 20px auto;
    a {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 15px;
      
      color: var(--green);
    }
  }
`;
