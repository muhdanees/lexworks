import Topbar from "./TopBar";
import Navbar from "./Navbar";

function Header({ page = "" }) {
  return (
    <>
      <Topbar />
      <Navbar page={page} />
    </>
  );
}

export default Header;
