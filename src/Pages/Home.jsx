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
          className="hidden md:block md:absolute md:z-[-1] md:top-0 md:left-0 md:w-full lg:hidden"
          src="/assets/images/mobile/first-circle-tablet-home.png"
        />
        <img
          className="hidden md:hidden lg:absolute lg:z-[-1] lg:top-0 lg:right-0 lg:w-[640px] lg:block"
          src="/assets/images/mobile/first-cicle-home-desktop.png"
        />
        <img
          className="ml-[45px] md:mt-[40px] lg:hidden"
          src="/assets/images/mobile/mobile-svg.svg"
        />
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full lg:px-[165px]">
          <div className="flex flex-col items-center lg:items-start lg:mt-[-80px]">
            <p className="lg:mb-[30px] fontFamily-DM heading1 text-blueHeadings font-normal mt-[-80px] md:mt-[-40px] lg:mt-0 md:max-w-[500px] lg:w-[566px] lg:text-left">
              Start building with our APIs for absolutely free.
            </p>
            <ScheduleDemo />
            <ScheduleDemoTablet />
            <p className="mt-3 text-grayWords fontFamily-public lg:ml-[27px]">
              Have any questions?{" "}
              <span className="font-bold">
                <Link to={"/contact"}>Contact Us</Link>
              </span>
            </p>
          </div>
          <img
            className="hidden lg:block lg:w-[47%]"
            src="/assets/images/mobile/mobile-svg.svg"
          />
        </div>
        <div className="w-full mt-[80px] relative py-[80px] bg-lightBlackDivsBg flex flex-col items-center lg:py-[100px] lg:px-[165px]">
          <SecondCircleHome />
          <img
            className="hidden lg:absolute  lg:z-[1] lg:top-0 lg:left-0 lg:block"
            src="/assets/images/mobile/desktop-second-circle-home.png"
          />
          <div className="flex flex-col items-center lg:w-full lg:flex lg:flex-row-reverse lg:justify-between ">
            <LightCompanies />
            <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-start lg:z-[10]">
              <h2 className="fontFamily-DM text-emailInputBg text-[32px] font-normal mt-[50px] lg:mt-0 md:text-[48px]">
                Who we work with
              </h2>
              <p className="w-[327px] lg:text-left md:w-[445px] fontFamily-public text-emailInputBg opacity-[0.7] text-[15px] leading-7 font-normal mt-4 text-center">
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </p>
              <Link to={"/about"}>
                <button className="lg:z-[10] lg:cursor-pointer mt-[50px] text-15px font-bold fontFamily-public text-emailInputBg px-8 py-4 rounded-3xl border border-solid border-emailInputBg lg:hover:text-black lg:hover:bg-white lg:transition lg:duration-300">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:px-[165px] lg:pt-[150px] lg-pb-[80px] lg:w-full">
          <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full">
            <img
              className="md:mt-[50px] lg:mt-[-30px] lg:w-[50%]"
              src="/assets/images/mobile/script-image-mobile.svg"
            />
            <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-start">
              <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] mt-[-50px] lg:text-[48px]">
                Easy to implement
              </h2>
              <p className="w-[327px] md:w-[530px] lg:w-[426px] lg:text-left fontFamily-public text-grayWords text-[15px] leading-7 font-normal mt-6 text-center">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row-reverse lg:w-full lg:justify-between lg:relative lg:z-10">
            <div className="flex lg:z-10">
              <img src="/assets/images/mobile/phone2-image-mobile.svg" />
              <img
                src="/assets/images/mobile/phone3-image-mobile.svg"
                className="ml-[-138px]"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] mt-[-50px] lg:text-[48px]">
                Simple UI & UX
              </h2>
              <p className="w-[327px] lg:w-[445px] md:w-[540px] fontFamily-public text-grayWords text-[15px] leading-7 font-normal mt-6 lg:text-left text-center">
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
            <img
              className="hidden lg:block lg:absolute lg:right-[-13%] lg:z-1"
              src="/assets/images/mobile/third-circle-home-desktop.png"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-0 md:w-full md:justify-between md:px-[40px] gap-[60px] items-center md:items-baseline mt-[60px]">
            <div className="flex flex-col items-center">
              <img src="/assets/images/mobile/card-image-finances.png" />
              <h2 className="text-blueHeadings font-bold fontFamily-public text-[18px] mt-[33px]">
                Personal Finances
              </h2>
              <p className="mt-4 text-center w-[311px] md:w-[223px] text-[15px] text-grayWords lg:w-[350px]">
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
              <p className="mt-4 text-center w-[311px] md:w-[223px] text-[15px] text-grayWords lg:w-[350px]">
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src="/assets/images/mobile/card-image-payment.png" />
              <h2 className="text-blueHeadings font-bold fontFamily-public text-[18px] mt-[33px]">
                Consumer Payments
              </h2>
              <p className="mt-4 text-center w-[311px] md:w-[223px] text-[15px] text-grayWords lg:w-[350px]">
                It’s easier to set up secure bank payments with us through a
                flow designed with the user experience in mind. Customers could
                instantly authenticate their account.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:w-full lg:justify-between lg:mt-[96px]">
            <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] mt-[80px] lg:mt-0 lg:text-[48px]">
              Ready to start?
            </h2>
            <ScheduleDemo />
            <ScheduleDemoTablet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
