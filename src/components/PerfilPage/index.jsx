import { ContainerProfile } from "./style";

import ProfileComponent from "../ProfileComponent";
import Footer from "../Footer";
import ProfileMenus from "../ProfileMenus";

const PerfilPage = () => {
  return (
    <ContainerProfile>
      <ProfileComponent />
      <ProfileMenus />
      <Footer />
    </ContainerProfile>
  );
};

export default PerfilPage;
