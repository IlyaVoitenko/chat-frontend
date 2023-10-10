import { useState } from "react";
// import { handleSentMessage } from "../../../utils/helpers";

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

  return (
    <form onSubmit={handleSentMessage}>
      <input
        type="text"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default CreateMessage;
