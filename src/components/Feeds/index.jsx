import React from "react";
import miniFeed1 from "../../assets/mini1.png";
import miniFeed2 from "../../assets/mini2.png";
import banner3 from "../../assets/banner3.png";
import "./index.css";
import { ContainerFeed } from "./style";

const Feeds = () => {
  return (
    <ContainerFeed>
      <div className="feeds-container">
        <img className="mini" src={miniFeed1} alt="mini Feed" />
        <img className="mini" src={miniFeed2} alt="mini Feed" />
      </div>
      <img className="bannerfooter" src={banner3} alt="banner" />
    </ContainerFeed>
  );
};

export default Feeds;
