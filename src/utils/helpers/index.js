export const handleLeaveChat = (navigation) => {
  localStorage.removeItem("user");
  navigation("/");
};
