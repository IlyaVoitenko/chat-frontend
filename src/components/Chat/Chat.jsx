import Body from "./Body";
import CreateMessage from "./CreateMessage";
import Users from "./Users";

const Chat = ({ socket }) => {
  return (
    <div>
      <Body socket={socket} />
      <CreateMessage socket={socket} />
      <Users socket={socket} />
    </div>
  );
};

export default Chat;
