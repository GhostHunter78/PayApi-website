import { Link } from "react-router-dom";
import ScheduleDemo from "../Components/ScheduleDemo";
import ScheduleDemoTablet from "../Components/ScheduleDemoTablet";
import LightCompanies from "../Components/LightCompanies";
import FirstCircleHome from "../SVGs/FirstCircleHome";
import SecondCircleHome from "../SVGs/SecondCircleHome";

const Home = () => {
  return (
    <>
      <div className="w-screen flex flex-col items-center pb-[80px] overflow-x-hidden">
        <FirstCircleHome />
        <img
          className="hidden md:block md:absolute md:z-[-1] md:top-0 md:left-0 md:w-full"
          src="/assets/images/mobile/first-circle-tablet-home.png"
        />
        <img
          className="ml-[45px] md:mt-[40px]"
          src="/assets/images/mobile/mobile-svg.svg"
        />
        <p className="fontFamily-DM heading1 text-blueHeadings font-normal mt-[-80px] md:mt-[-40px] md:max-w-[500px]">
          Start building with our APIs for absolutely free.
        </p>
        <ScheduleDemo />
        <ScheduleDemoTablet />
        <p className="mt-3 text-grayWords fontFamily-public">
          Have any questions?{" "}
          <span className="font-bold">
            <Link to={"/contact"}>Contact Us</Link>
          </span>
        </p>
        <div className="w-full mt-[80px] relative py-[80px] bg-lightBlackDivsBg flex flex-col items-center">
          <SecondCircleHome />
          <LightCompanies />
          <h2 className="fontFamily-DM text-emailInputBg text-[32px] font-normal mt-[50px] md:text-[48px]">
            Who we work with
          </h2>
          <p className="w-[327px] md:w-[445px] fontFamily-public text-emailInputBg opacity-[0.7] text-[15px] leading-7 font-normal mt-4 text-center">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Link to={"/about"}>
            <button className="mt-[50px] text-15px font-bold fontFamily-public text-emailInputBg px-8 py-4 rounded-3xl border border-solid border-emailInputBg">
              About Us
            </button>
          </Link>
        </div>
        <img
          className="md:mt-[50px]"
          src="/assets/images/mobile/script-image-mobile.svg"
        />
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] mt-[-50px]">
          Easy to implement
        </h2>
        <p className="w-[327px] md:w-[530px] fontFamily-public text-grayWords text-[15px] leading-7 font-normal mt-6 text-center">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
        <div className="flex">
          <img src="/assets/images/mobile/phone2-image-mobile.svg" />
          <img
            src="/assets/images/mobile/phone3-image-mobile.svg"
            className="ml-[-138px]"
          />
        </div>
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] mt-[-50px]">
          Simple UI & UX
        </h2>
        <p className="w-[327px] md:w-[540px] fontFamily-public text-grayWords text-[15px] leading-7 font-normal mt-6 text-center">
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
        <div className="flex flex-col md:flex-row md:gap-0 md:w-full md:justify-between md:px-[40px] gap-[60px] items-center md:items-baseline mt-[60px]">
          <div className="flex flex-col items-center">
            <img src="/assets/images/mobile/card-image-finances.png" />
            <h2 className="text-blueHeadings font-bold fontFamily-public text-[18px] mt-[33px]">
              Personal Finances
            </h2>
            <p className="mt-4 text-center w-[311px] md:w-[223px] text-[15px] text-grayWords">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/assets/images/mobile/card-image-banking.png" />
            <h2 className="text-blueHeadings font-bold fontFamily-public text-[18px] mt-[33px]">
              Banking & Coverage
            </h2>
            <p className="mt-4 text-center w-[311px] md:w-[223px] text-[15px] text-grayWords">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/assets/images/mobile/card-image-payment.png" />
            <h2 className="text-blueHeadings font-bold fontFamily-public text-[18px] mt-[33px]">
              Consumer Payments
            </h2>
            <p className="mt-4 text-center w-[311px] md:w-[223px] text-[15px] text-grayWords">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] mt-[80px]">
          Ready to start?
        </h2>
        <ScheduleDemo />
        <ScheduleDemoTablet />
      </div>
    </>
  );
};

export default Home;
