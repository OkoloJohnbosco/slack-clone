import React from 'react';
import db from './firebase';

function useChat(id) {
  const [roomDetails, setRoomDetails] = React.useState(null);

  React.useEffect(() => {
    setRoomDetails(null);
    db.collection('rooms')
      .doc(id)
      .onSnapshot((doc) => {
        setRoomDetails(doc.data());
      });
  }, [id]);
  return [roomDetails];
}

export default useChat;
