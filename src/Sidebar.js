import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOptions from "./SidebarOption";
import data from "./options";
import { Divider } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import db from "./firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snap) =>
      setChannels(snap.docs.map((item) => ({ ...item.data(), id: item.id })))
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerInner flex">
          <div className="sidebar__headerLeft flex">
            <h3>JsMinna Internship</h3>
            <ExpandMoreIcon
              style={{
                marginLeft: "5px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="sidebar__headerIcon">
            <EditIcon style={{ color: "#4a124b", width: "20px" }} />
          </div>
        </div>
      </div>
      <div className="sidebar__body">
        {data.map((item) => (
          <SidebarOptions {...item} key={item.title} />
        ))}
        <Divider style={{ backgroundColor: "#cecece77" }} />
        <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
        <Divider style={{ backgroundColor: "#cecece77" }} />
        <SidebarOptions
          Icon={AddCircleIcon}
          addChannelOption
          title="Add Channel"
        />
        {channels ? (
          channels.map((item) => (
            <SidebarOptions key={item.name} title={item.name} id={item.id} />
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
