import styled from "styled-components";

export const ContainerMenu = styled.div`
  position: fixed;
  border=bottom: 2px solid 
  width: 393px;
  height: 120px;
  margin: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  box-shadow: 1px 0px 10px 1px rgba(8, 121, 8, 0.348);
  section {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    height: auto;
    font-size: x-large;
    h4 {
      color: var(--green);
    }
  }
  aside {
    width: 100%;
    
    display: flex;
    justify-content: space-around;
    div{
      height: 30px;
      margin: 0;
      
      &:hover{
      cursor:pointer;
      border-bottom: 3px solid var(--green);
    }
    }
  }
`;
