import React from "react";
import gamesSVG from "./games.svg";
const LogoWidget = () => {
  return (
    <img
      className="icon-logo"
      src={gamesSVG}
      alt="GameShop"
      width="150px"
      height="110px"
    />
  );
};

export default LogoWidget;
