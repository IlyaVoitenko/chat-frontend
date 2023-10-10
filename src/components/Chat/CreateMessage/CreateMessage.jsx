import { useState } from "react";
import Typing from "../Typing";

const CreateMessage = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSentMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  const isTyping = () =>
    socket.emit("typing", `${localStorage.getItem("user")} is typing`);
  return (
    <form onSubmit={handleSentMessage}>
      <Typing socket={socket} />
      <input
        type="text"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyDown={isTyping}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default CreateMessage;
