import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root{
    --primary-color:rgba(249, 249, 249, 1);
    --secundary-color: rgba(2, 130, 91, 1);
    --tertiary-color: rgba(57, 57, 57, 1);
    --green: #02825B;
    --white: #E5E5E5;
    --green-clear: #72DAAD4D;
    --grey05: rgba(155, 155, 155, 0.5);
    --grey10: rgba(155, 155, 155, 10);
    --red:  #db4a39;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  `;
