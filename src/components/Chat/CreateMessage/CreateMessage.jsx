import { useState } from "react";
import { handleSentMessage, isTyping } from "../../../utils/helpers";
import Typing from "../Typing";

const CreateMessage = ({ socket }) => {
  const [message, setMessage] = useState("");

  return (
    <form onSubmit={(e) => handleSentMessage(e, message, socket, setMessage)}>
      <Typing socket={socket} />
      <input
        type="text"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyDown={() => isTyping(socket)}
      />
      <button type="submit">send</button>
    </form>
  );
};

export default CreateMessage;
