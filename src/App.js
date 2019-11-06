import React from 'react';
import Message from './components/Message';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';

function App () {
  return (
    <div>
      <Message />
      <MessageList />
      <NewRoomForm />
      <RoomList />
      <SendMessageForm />
      

    </div>
  )
}
export default App;