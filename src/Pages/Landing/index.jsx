import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "../../components/LandingPage";

const Landing = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      return history.push("/login");
    }, 2000);
  }, []);
  return (
    <>
      <LandingPage />
    </>
  );
};
export default Landing;
