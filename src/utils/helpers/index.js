export const handleLeaveChat = (navigation, socket) => {
  socket.emit("logoutUser");
  localStorage.removeItem("user");
  navigation("/");
};
export const handleSentMessage = (e, message, socket, setMessage) => {
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
export const isTyping = (socket) =>
  socket.emit("typing", `${localStorage.getItem("user")} is typing`);

export const checkTyping = (socket, setStatus) => {
  socket.on("respnseTyping", (data) => {
    setStatus(data);
    setTimeout(() => setStatus(""), 1000);
  });
};
