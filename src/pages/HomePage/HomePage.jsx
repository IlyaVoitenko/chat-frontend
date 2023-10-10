import Home from "../../components/Home";

// eslint-disable-next-line react/prop-types
const HomePage = ({ socket }) => {
  return <Home socket={socket} />;
};

export default HomePage;
