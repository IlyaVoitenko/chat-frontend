import { useEffect, useState } from "react";

const Typing = ({ socket }) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("respnseTyping");
    socket.on("respnseTyping", (data) => {
      setStatus(data);
      setTimeout(() => setStatus(""), 1000);
    });
  }, [socket]);
  return <div>{status}</div>;
};

export default Typing;
