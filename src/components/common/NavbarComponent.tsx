import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import React from "react";

const NavbarComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed flex items-center  z-50  top-0 h-14  w-full  bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <nav className="flex justify-between w-full mx-auto px-10">
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold  cursor-pointer transform hover:scale-105 transition ease-in-out duration-300 bg-transparent"
        >
          ShadAnime
        </div>
        <div className="hidden md:flex  space-x-2">
          <SearchBar />
          <ThemeToggle />
        </div>
        <div className="flex items-center md:hidden ">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
