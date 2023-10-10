import { useEffect, useState } from "react";

const Users = ({ socket }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("responseNewUser", (data) => setUsers(data));
  }, [socket, users]);
  console.log(users);
  return (
    <div>
      {users &&
        users.map(({ socketID, user }) => (
          <p key={`${socketID}-${Math.random()}`}>{user}</p>
        ))}
    </div>
  );
};

export default Users;
