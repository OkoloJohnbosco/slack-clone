import React from 'react';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import SortByAlphaOutlinedIcon from '@material-ui/icons/SortByAlphaOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SendIcon from '@material-ui/icons/Send';
import {IconButton, Tooltip} from '@material-ui/core';
import './MessageSender.css';
import db, {serverTime} from './firebase';
import {useStateValue} from './StateProvider';

function MessageSender({roomName, id}) {
  const [{user}] = useStateValue();
  const [text, setText] = React.useState('');

  const postMessage = (e) => {
    e.preventDefault();
    if (text.trim()) {
      db.collection('rooms').doc(id).collection('messages').add({
        message: text,
        userName: user.displayName,
        timestamp: serverTime(),
        userImage: user.photoURL,
      });
      setText('');
    }
  };

  return (
    <div className="messageSender">
      <form onSubmit={postMessage}>
        <input
          placeholder={`Send a message to # ${roomName}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="messageSender__bottom">
        <p className="messageSender__bottomP">
          <IconButton style={iconStyles}>
            <FlashOnOutlinedIcon fontSize="small" />
          </IconButton>
          <span className="messageSender__bottomSpan"></span>
        </p>
        <div>
          <Tooltip arrow title="Hide Formatting">
            <IconButton style={iconStyles}>
              <SortByAlphaOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Hide Formatting">
            <IconButton style={iconStyles}>
              <MoodOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Hide Formatting">
            <IconButton style={iconStyles}>
              <AttachFileOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Hide Formatting">
            <IconButton
              onClick={postMessage}
              disabled={!text.trim()}
              style={{...iconStyles, ...submitBtn}}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

const iconStyles = {
  borderRadius: '2px',
};

const submitBtn = {
  backgroundColor: '#1264a3',
  color: '#fff',
};

export default MessageSender;
