import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.conponent";

const Home = () => {
  return (
    <div>
      <Directory />;
      <Outlet />
    </div>
  );
};

export default Home;
