import Facebook from "../SVGs/Facebook";
import Twitter from "../SVGs/Twitter";
import Linkedin from "../SVGs/Linkedin";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full relative z-10 pt-[40px] pb-[55px] bg-lightBlackDivsBg flex flex-col items-center">
        <img src="/assets/logo-footer.png" />
        <div className="flex flex-col items-center gap-[30px] my-[40px] z-[10]">
          <Link to={"/pricing"}>
            <p className="text-emailInputBg text-[15px] fontFamily-public font-bold opacity-[0.7]">
              Pricing
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="text-emailInputBg text-[15px] fontFamily-public font-bold opacity-[0.7]">
              About
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="text-emailInputBg text-[15px] fontFamily-public font-bold opacity-[0.7]">
              Contact
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-6 z-[10]">
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
        <img
          className="absolute z-[0] top-[51%] left-0 w-full"
          src="/public/assets/images/mobile/footer-circle-mobile.svg"
        />
      </div>
    </>
  );
};

export default Footer;
