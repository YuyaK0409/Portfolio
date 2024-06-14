// Component
import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="p-side py-4 w-full fixed flex justify-center top-0 z-50 bg-black">
      <nav className="max-w-container flex-1 flex">
        <HeaderLogo />
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
