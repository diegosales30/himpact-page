import styled from "styled-components";

export const ContainerProfileMenus = styled.div`
    min-height: 670px;
  
    section {
      width: 360px;
      height: 70px;
      display: flex;
      margin: auto;
      justify-content: space-between;
      align-items: center;
      
      margin-top: 3px;
      box-shadow: 1px 1px 10px 1px rgba(2, 130, 91, 0.2);
      aside{
        cursor: pointer;
        margin-left: 15px;
        display:flex;
        align-items: center;
        width: 320px;
        height: 71px;
        justify-content: space-between;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: rgba(57, 57, 57, 0.6);
        
      }
      &:hover{
          box-shadow: 5px 2px 15px 1px rgba(57, 57, 57, 0.3);
        }
      
    }
  }
`;
