import imgProfile from "../../assets/profilePic.jpg";
import logoMini from "../../assets/miniLogo.png";
import { ContainerProfile } from "./style";
const ProfileComponent = () => {
  return (
    <ContainerProfile>
      <div>
        <figure>
          <img src={imgProfile} alt="profileImg" />
        </figure>
        <section>
          <h2>Jack Smith</h2>
          <p>@jacksmith_</p>
        </section>
      </div>
      <aside>
        <img src={logoMini} alt="" />
      </aside>
    </ContainerProfile>
  );
};
export default ProfileComponent;
