import { ContainerLanding } from "./style";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LandingPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return <ContainerLanding onClick={() => handleNavigation("/login")} />;
};
export default LandingPage;
