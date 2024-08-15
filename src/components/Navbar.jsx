import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl font-medium tracking-tight">
                MediTech.ai
              </span>
            </div>
          </Link>
          <ul className="hidden lg:flex ml-10 space-x-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`${
                    location.pathname === item.href
                      ? "bg-transparent border border-indigo-500 text-indigo-500"
                      : "border border-transparent hover:border-white hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className={`${
                      location.pathname === item.href
                        ? "bg-transparent border border-indigo-500 text-indigo-500"
                        : "border border-transparent hover:border-white hover:text-white"
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
