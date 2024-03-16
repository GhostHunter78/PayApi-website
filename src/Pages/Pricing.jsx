import PricingCircle from "../SVGs/PricingCircle";
import CheckIcon from "../SVGs/CheckIcon";
import ScheduleDemo from "../Components/ScheduleDemo";

const Pricing = () => {
  return (
    <>
      <PricingCircle />
      <div className="flex flex-col items-center w-full px-6 pb-[80px]">
        <h2 className="mt-[50px] fontFamily-DM text-[32px] text-blueHeadings font-semibold">
          Pricing
        </h2>
        <h2 className="mt-[30px] fontFamily-DM text-[24px] text-redButton font-semibold">
          Free Plan
        </h2>
        <h2 className="mt-[50px] fontFamily-DM text-[48px] text-blueHeadings font-bold">
          $0.00
        </h2>
        <div className="grid-columns-1 w-full flex flex-col items-center py-6 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
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
        <h2 className="mt-[30px] fontFamily-DM text-[24px] text-redButton font-semibold">
          Basic Plan
        </h2>
        <h2 className="mt-[50px] fontFamily-DM text-[48px] text-blueHeadings font-bold">
          $249.00
        </h2>
        <div className="grid-columns-1 w-full flex flex-col items-center py-6 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
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
        <h2 className="mt-[30px] fontFamily-DM text-[24px] text-redButton font-semibold">
          Premium Plan
        </h2>
        <h2 className="mt-[50px] fontFamily-DM text-[48px] text-blueHeadings font-bold">
          $499.00
        </h2>
        <div className="grid-columns-1 w-full flex flex-col items-center py-6 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
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
      <div className="flex flex-col items-center w-full pb-[80px]">
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px]">
          Ready to start?
        </h2>
        <ScheduleDemo />
      </div>
    </>
  );
};

export default Pricing;
