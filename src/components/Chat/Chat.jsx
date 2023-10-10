import Body from "./Body";
import CreateMessage from "./CreateMessage";

const Chat = ({ socket }) => {
  return (
    <div>
      <Body socket={socket} />
      <CreateMessage socket={socket} />
    </div>
  );
};

export default Chat;
