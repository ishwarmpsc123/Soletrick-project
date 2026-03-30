import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />

      {/* Page content */}
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;