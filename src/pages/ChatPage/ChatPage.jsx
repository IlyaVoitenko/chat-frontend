/* eslint-disable react/prop-types */
import Chat from "../../components/Chat";

const ChatPage = ({ socket }) => {
  return <Chat socket={socket} />;
};

export default ChatPage;
