import { useEffect, useState } from "react";
import { handleLeaveChat } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

const Body = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div>
      <header>
        <button onClick={() => handleLeaveChat(navigation, socket)}>
          leave the chat
        </button>
      </header>
      <div className="container">
        {messages.map((message) => {
          return (
            <div key={message.id}>
              <p>
                {message.name === localStorage.getItem("user")
                  ? "you :"
                  : `${message.name}:`}{" "}
              </p>
              <div
                className={
                  message.name === localStorage.getItem("user")
                    ? "message-sender"
                    : "message-recipiend"
                }
              >
                <p>{message.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
