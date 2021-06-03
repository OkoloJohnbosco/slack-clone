import React from 'react';
import './SidebarOptions.css';
import {useHistory} from 'react-router-dom';
import db from './firebase';

function SidebarOption({Icon, title, addChannelOption, id}) {
  const history = useHistory();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = (id) => {
    history.push(`/room/${id}`);
  };

  const selectAction = () => {
    addChannelOption && addChannel();
    id && selectChannel(id);
  };

  return (
    <div className="sidebarOptions flex" onClick={selectAction}>
      {Icon && <Icon className="sidebarOptions__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
