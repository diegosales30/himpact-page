import styled from "styled-components";
import { keyframes } from "styled-components";

const animationForm = keyframes`
from {
  opacity: 0;
  transform: translateX(3px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}

`;
export const AnimationContainer = styled.div`
  animation: ${animationForm} 1.2s;
`;
