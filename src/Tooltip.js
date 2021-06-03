import React from "react";
import "./Tooltip.css";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import MoodOutlinedIcon from "@material-ui/icons/MoodOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import { Tooltip, IconButton } from "@material-ui/core";

function CustomTooltip() {
  return (
    <div className="tooltip">
      <Tooltip title="Add reaction" arrow>
        <IconButton style={iconStyles}>
          <MoodOutlinedIcon style={{ ...iconSize }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reply in thread" arrow>
        <IconButton style={iconStyles}>
          <QuestionAnswerOutlinedIcon style={{ ...iconSize }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share message" arrow>
        <IconButton style={iconStyles}>
          <ReplayOutlinedIcon style={{ ...iconSize }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add to save items" arrow>
        <IconButton style={iconStyles}>
          <BookmarkBorderOutlinedIcon style={{ ...iconSize }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="More action" arrow>
        <IconButton style={iconStyles}>
          <MoreVertOutlinedIcon style={{ ...iconSize }} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

const iconStyles = {
  borderRadius: "2px",
};

const iconSize = {
  fontSize: "18px",
};
export default CustomTooltip;
