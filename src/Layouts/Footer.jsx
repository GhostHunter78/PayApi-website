import Facebook from "../SVGs/Facebook";
import Twitter from "../SVGs/Twitter";
import Linkedin from "../SVGs/Linkedin";
import FooterCircle from "../SVGs/FooterCircle";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full relative z-10 pt-[40px] md:px-[40px] md:pt-0 md:pb-0 pb-[55px] bg-lightBlackDivsBg flex flex-col items-center md:flex-row md:justify-between lg:px-[165px]">
        <div className="md:flex md:items-center md:gap-[65px]">
          <Link to={"/"}>
            <img src="/assets/logo-footer.png" />
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-[30px] my-[40px] z-[10]">
            <Link to={"/pricing"}>
              <p className="text-emailInputBg text-[15px] fontFamily-public font-bold opacity-[0.7] lg:text-[20px] hover:text-rose-500 transition duration-300">
                Pricing
              </p>
            </Link>
            <Link to={"/about"}>
              <p className="text-emailInputBg text-[15px] fontFamily-public font-bold opacity-[0.7] lg:text-[20px] hover:text-rose-500 transition duration-300">
                About
              </p>
            </Link>
            <Link to={"/contact"}>
              <p className="text-emailInputBg text-[15px] fontFamily-public font-bold opacity-[0.7] lg:text-[20px] hover:text-rose-500 transition duration-300">
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 z-[10]">
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
        <FooterCircle />
      </div>
    </>
  );
};

export default Footer;
