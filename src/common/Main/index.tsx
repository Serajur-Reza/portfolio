import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Main = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />

      <div className="sticky top-[100vh]">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
