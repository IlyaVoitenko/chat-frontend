import { useEffect, useState } from "react";
import { checkTyping } from "../../../utils/helpers";

const Typing = ({ socket }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    checkTyping(socket, setStatus);
  }, [socket]);

  return <div>{status}</div>;
};

export default Typing;
