import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigation = useNavigate();
  const [user, setUser] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    const randomId = `${socket.id}-${Math.random()}`;
    const newUser = {
      user,
      socketID: randomId,
    };
    socket.emit("newUser", newUser);
    socket.emit("currentUser", newUser);
    navigation("/chat");
  };

  return (
    <form onSubmit={handeSubmit}>
      <label>enter to chat</label>
      <input
        type="text"
        value={user}
        onChange={({ target }) => setUser(target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Home;
