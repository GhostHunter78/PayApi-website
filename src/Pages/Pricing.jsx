import PricingCircle from "../SVGs/PricingCircle";
import CheckIcon from "../SVGs/CheckIcon";
import ScheduleDemo from "../Components/ScheduleDemo";
import ScheduleDemoTablet from "../Components/ScheduleDemoTablet";

const Pricing = () => {
  return (
    <>
      <PricingCircle />
      <img
        className=" hidden absolute top-0 right-0 z-[-1]"
        src="/assets/images/mobile/prising-circle-tablet.png"
      />
      <div className="flex flex-col items-center w-full px-6 pb-[80px]">
        <h2 className="mt-[50px] fontFamily-DM text-[32px] text-blueHeadings font-semibold md:text-[48px]">
          Pricing
        </h2>
        <div className="md:flex w-full justify-between">
          <div className="flex flex-col items-center">
            <h2 className="mt-[30px] fontFamily-DM text-[24px] text-redButton font-semibold">
              Free Plan
            </h2>
            <p className="hidden md:block mt-[13px] text-[15px] text-grayWords text-center w-[200px]">
              Build and test using our core set of products with up to 100 API
              requests
            </p>
            <h2 className="mt-[50px] fontFamily-DM text-[48px] text-blueHeadings font-bold md:mt-[19px]">
              $0.00
            </h2>
            <div className=" md:w-[210px] grid-columns-1 w-full flex flex-col items-center py-6 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Transactions
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Auth
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Identity
                </p>
              </div>
              <p className="text-[14px] opacity-[0.5] ml-[37px] fontFamily-public text-blueHeadings">
                Investments
              </p>
              <p className="text-[14px] opacity-[0.5] ml-[37px] fontFamily-public text-blueHeadings">
                Assets
              </p>
              <p className="text-[14px] opacity-[0.5] ml-[37px] fontFamily-public text-blueHeadings">
                Liabilities
              </p>
              <p className="text-[14px] opacity-[0.5] ml-[37px] fontFamily-public text-blueHeadings">
                Income
              </p>
            </div>
            <button className="mt-6 text-15px font-bold fontFamily-public text-blueHeadings px-6 py-3 rounded-3xl border border-solid border-blueHeadings">
              Request Access
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mt-[30px] fontFamily-DM text-[24px] text-redButton font-semibold">
              Basic Plan
            </h2>
            <p className="hidden md:block mt-[13px] text-[15px] text-grayWords text-center w-[200px]">
              Launch your project with unlimited requests and no contractual
              minimums
            </p>
            <h2 className="mt-[50px] fontFamily-DM text-[48px] text-blueHeadings font-bold md:mt-[19px]">
              $249.00
            </h2>
            <div className=" md:w-[210px] grid-columns-1 w-full flex flex-col items-center py-6 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Transactions
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Auth
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Identity
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Investments
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Assets
                </p>
              </div>
              <p className="text-[14px] opacity-[0.5] ml-[37px] fontFamily-public text-blueHeadings">
                Liabilities
              </p>
              <p className="text-[14px] opacity-[0.5] ml-[37px] fontFamily-public text-blueHeadings">
                Income
              </p>
            </div>
            <button className="mt-6 text-15px font-bold fontFamily-public text-blueHeadings px-6 py-3 rounded-3xl border border-solid border-blueHeadings">
              Request Access
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mt-[30px] fontFamily-DM text-[24px] text-redButton font-semibold">
              Premium Plan
            </h2>
            <p className="hidden md:block mt-[13px] text-[15px] text-grayWords text-center w-[200px]">
              Get tailored solutions, volume pricing, and dedicated support for
              your team
            </p>
            <h2 className="mt-[50px] fontFamily-DM text-[48px] text-blueHeadings font-bold md:mt-[19px]">
              $499.00
            </h2>
            <div className=" md:w-[210px] grid-columns-1 w-full flex flex-col items-center py-6 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Transactions
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Auth
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Identity
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Investments
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Assets
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Liabilities
                </p>
              </div>
              <div className="flex items-center gap-6 ">
                <CheckIcon />
                <p className="text-[14px] fontFamily-public text-blueHeadings">
                  Income
                </p>
              </div>
            </div>
            <button className="mt-6 text-15px font-bold fontFamily-public text-blueHeadings px-6 py-3 rounded-3xl border border-solid border-blueHeadings">
              Request Access
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full pb-[80px]">
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px]">
          Ready to start?
        </h2>
        <ScheduleDemo />
        <ScheduleDemoTablet />
      </div>
    </>
  );
};

export default Pricing;
