import React from "react";
import "./Header.css";
import { Avatar, Tooltip } from "@material-ui/core";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import face from "./assets/images/profile-boy.png";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left"></div>
      <div className="header__center">
        <AccessAlarmsIcon className="header__icons" />
        <input placeholder="Search HNG Internship" />
        <HelpOutlineIcon className="header__icons" />
      </div>

      <div className="header__right">
        <Tooltip arrow title={user?.displayName}>
          <Avatar
            className="header__avatar"
            alt=""
            src={user?.photoURL ?? face}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
