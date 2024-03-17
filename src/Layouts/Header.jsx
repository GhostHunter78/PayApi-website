import { Link } from "react-router-dom";
import BurgerIcon from "../SVGs/BurgerIcon";
import CloseIcon from "../SVGs/CloseIcon";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // Close the menu if the click is outside of the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    document.body.style.overflowY = "auto";
  };
  // Function to toggle the visibility of the div
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflowY = showMenu ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      <div className="px-6 pt-[40px] flex items-center justify-between w-screen z-[10] md:px-[40px] lg:px-[165px]">
        <div className="md:flex md:gap-[60px]">
          <Link to={"/"}>
            <img className="z-[10]" src="/assets/logo.png " />
          </Link>
          <div className="hidden md:flex md:items-center md:gap-[40px] lg:justify-between">
            <div className="md:flex md:gap-[40px]">
              <Link to="/pricing">
                <p className="text-blueHeadings font-bold lg:text-[20px] hover:text-rose-500 transition duration-300">
                  Pricing
                </p>
              </Link>
              <Link to="/about">
                <p className="text-blueHeadings font-bold lg:text-[20px] hover:text-rose-500 transition duration-300">
                  About
                </p>
              </Link>
              <Link to="/contact">
                <p className="text-blueHeadings font-bold lg:text-[20px] hover:text-rose-500 transition duration-300">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/contact">
          <button
            onClick={closeMenu}
            className="hidden md:block fontFamily-public px-7 pt-[10px] pb-[10px] rounded-3xl w-full text-[15px] font-normal bg-redButton text-emailInputBg"
            type="submit"
          >
            Schedule a Demo
          </button>
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          <BurgerIcon />
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full z-[10]">
          <div className="menu" ref={menuRef}>
            <div onClick={closeMenu}>
              <CloseIcon />
            </div>
            <div className="w-full border border-l-0 border-r-0 border-b-0 border-t-gray-300"></div>
            <Link to="/pricing">
              <p className="text-white opacity-[0.7]" onClick={closeMenu}>
                Pricing
              </p>
            </Link>
            <Link to="/about">
              <p className="text-white opacity-[0.7]" onClick={closeMenu}>
                About
              </p>
            </Link>
            <Link to="/contact">
              <p className="text-white opacity-[0.7]" onClick={closeMenu}>
                {" "}
                Contact
              </p>
            </Link>
            <Link to="/contact">
              <button
                onClick={closeMenu}
                className="fontFamily-public md:ml-[40px] px-7 pt-[10px] pb-[10px] rounded-3xl w-full text-[15px] font-normal bg-redButton text-emailInputBg"
                type="submit"
              >
                Schedule a Demo
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
