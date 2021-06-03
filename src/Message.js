import React from "react";
import { Avatar } from "@material-ui/core";
import "./Message.css";
import CustomTooltip from "./Tooltip";
import MoodOutlinedIcon from "@material-ui/icons/MoodOutlined";
import { IconButton, Tooltip } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const Message = React.forwardRef(
  ({ message, userName, timestamp, userImage }, ref) => {
    return (
      <div className="message" ref={ref} tabIndex={-1}>
        <div className="message__tooltip">
          <CustomTooltip />
        </div>
        <div className="message__avatarDiv">
          <Avatar src={userImage} className="message__avatar" />
        </div>
        <div className="message__body">
          <h4 className="message__header">
            {userName}
            <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          </h4>
          <p>{message}</p>
          <div className="message__icons">
            <Tooltip arrow title="Smile">
              <IconButton size="small" className="message__iconButton">
                <MoodOutlinedIcon fontSize="small" style={iconStyle} /> 1
              </IconButton>
            </Tooltip>

            <Tooltip arrow title="Thumbs up">
              <IconButton size="small" className="message__iconButton">
                <ThumbUpIcon
                  style={{ ...iconStyle, color: "#e2e217" }}
                  fontSize="small"
                />
                1
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
);

const iconStyle = {
  marginRight: "8px",
};
export default Message;
