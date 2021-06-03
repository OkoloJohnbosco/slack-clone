import React, {useRef, useEffect} from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import {IconButton} from '@material-ui/core';
import useChat from './useChat';
import useChatDetails from './useChatDetails';
import Message from './Message';
import MessageSender from './MessageSender';
import Spinner from './Spinner';
import FlipMove from 'react-flip-move';

const isFilled = (arr) => (arr === null ? null : !!arr.length);

function Chat() {
  const {roomId} = useParams();
  const [messages] = useChat(roomId);
  const [roomDetails] = useChatDetails(roomId);
  const chatRef = useRef(null);

  useEffect(() => {
    handleScroll();
  }, [messages]);

  const handleScroll = () => {
    chatRef &&
      chatRef.current.scrollTo({
        top: chatRef?.current.scrollHeight,
        behavior: 'smooth',
      });
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name ?? 'Loading..'}</strong>
            <StarBorderIcon
              style={{
                marginLeft: '15px',
                fontWeight: '300',
                color: '#bababa',
              }}
            />
          </h4>
          <p className="chat__channelPinned">
            <PinDropOutlinedIcon /> 1<span>|</span>
            Important info keep the channel clean
          </p>
        </div>
        <div className="chat__headerRight">
          <p>
            <IconButton>
              <PersonAddOutlinedIcon />
            </IconButton>
          </p>
          <p>
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>{' '}
            Details
          </p>
        </div>
      </div>

      <div className="chat__body" ref={chatRef}>
        <div className="chat__chats">
          {isFilled(messages) && (
            <FlipMove enterAnimation="fade" leaveAnimation="elevator">
              {messages.map((message) => (
                <Message key={message.id} {...message} />
              ))}
            </FlipMove>
          )}
          {!messages && <Spinner height={400} width={400} />}
          {!isFilled(messages) && messages !== null && (
            <h3 style={pStyle}>
              <span>No message to load in {roomDetails?.name}</span>
            </h3>
          )}
        </div>

        <div className="chat__messageSender">
          {messages && (
            <MessageSender id={roomId} roomName={roomDetails?.name} />
          )}
        </div>
      </div>
    </div>
  );
}
const pStyle = {
  color: '#222',
  textAlign: 'center',
  width: '100%',
  display: 'grid',
  paddingTop: '50px',
  placeItems: 'center',
};

export default Chat;
