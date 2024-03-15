import { Link } from "react-router-dom";
import BurgerIcon from "../SVGs/BurgerIcon";

const Header = () => {
  return (
    <>
      <div className="px-6 pt-[40px] flex items-center justify-between w-screen">
        <Link to={"/"}>
          <img src="/assets/logo.png" />
        </Link>
        <BurgerIcon />
      </div>
    </>
  );
};

export default Header;
