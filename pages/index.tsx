import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="shrink-0 flex items-center font-semibold text-xl tracking-tight">
              Logo
            </div>
            <div className="hidden lg:ml-10 lg:flex lg:items-center lg:space-x-6 font-sans">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Find</a>
              <a href="#">Post</a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs cursor-pointer group">
              <label htmlFor="search" className="sr-only">
                Recherche
              </label>
              <div className="relative">
                <div className="w-full pr-12 pl-4 py-2 border border-skin-base rounded-md text-skin-base leading-5 bg-skin-body font-normal text-skin-muted text-sm group-hover:bg-skin-card-gray">
                  Search...
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button className="text-2xl" onClick={toggleMenu}>
              {isOpen ? <RxCross1 /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            <div className="relative flex items-center space-x-6 font-sans">
              <a
                href="https://laravel.cm/login"
                className="text-skin-menu hover:text-skin-menu-hover inline-flex items-center text-sm font-medium"
              >
                Se connecter
              </a>
              <a
                href="https://laravel.cm/register"
                className="text-flag-green inline-flex items-center text-sm font-medium"
              >
                Créer un compte
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
