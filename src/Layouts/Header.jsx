import BurgerIcon from "../SVGs/BurgerIcon";

const Header = () => {
  return (
    <>
      <div className="px-6 pt-[40px] flex items-center justify-between w-screen">
        <img src="/assets/logo.png" />
        <BurgerIcon />
      </div>
    </>
  );
};

export default Header;
