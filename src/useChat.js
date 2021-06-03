import React from 'react';
import db from './firebase';

function useChat(id) {
  const [messages, setMessages] = React.useState(null);

  React.useEffect(() => {
    setMessages(null);
    db.collection('rooms')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
  }, [id]);
  return [messages];
}

export default useChat;
