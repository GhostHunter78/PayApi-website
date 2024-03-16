import ScheduleDemo from "../Components/ScheduleDemo";
import ScheduleDemoTablet from "../Components/ScheduleDemoTablet";
import PricingCircle from "../SVGs/PricingCircle";

const About = () => {
  return (
    <>
      <PricingCircle />
      <img
        className="absolute top-0 right-0 z-[-1]"
        src="/assets/images/mobile/prising-circle-tablet.png"
      />
      <div className="flex flex-col items-center w-full">
        <h2 className="fontFamily-DM text-[32px] text-blueHeadings font-semibold mt-[40px] w-[300px] text-center leading-10 md:text-[48px] md:w-[500px] md:leading-normal	md:mt-[75px]">
          We empower innovators by delivering access to the financial system
        </h2>
        <div className=" md:px-[40px] w-full flex flex-col items-center">
          <div className="md:w-full md:flex md:flex-row md:justify-between md:items-initial md:mt-[55px] flex flex-col items-center">
            <h2 className="mt-[40px] md:mt-0 fontFamily-DM text-[24px] md:text-[32px] text-blueHeadings font-semibold">
              Our Vision
            </h2>
            <p className="mt-4 md:mt-0 w-[315px] text-center text-[15px] text-grayWords fontFamily-public md:w-[440px] md:text-left ">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className="md:w-full md:flex md:flex-row md:justify-between md:items-initial md:mt-[55px] flex flex-col items-center">
            <h2 className="mt-[48px] md:mt-0 fontFamily-DM text-[24px] md:text-[32px] text-blueHeadings font-semibold">
              Our Business
            </h2>
            <p className="mt-4 md:mt-0 w-[315px] text-center text-[15px] text-grayWords fontFamily-public md:w-[430px] md:text-left ">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
        <img
          className="mt-[75px] w-full md:hidden"
          src="/assets/images/mobile/about-page-image.png"
        />
        <img
          className="hidden mt-[75px] w-full md:block"
          src="/assets/images/mobile/about-page-img-tablet.png"
        />
      </div>
      <div className="flex flex-col items-center w-full px-6 md:px-[40px] mt-[30px]">
        <div className="w-full flex flex-col md:flex-row md:items-baseline md:justify-between items-center pt-4 md:py-0 pb-5 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
          <div className="md:flex md:flex-col md:items-center flex flex-col items-center">
            <p className="fontFamily-public text-[16px] text-blueHeadings opacity-[0.7]">
              Team Members
            </p>
            <h2 className="fontFamily-DM text-[56px] text-redButton font-semibold">
              300+
            </h2>
          </div>
          <div className="md:flex md:flex-col md:items-center flex flex-col items-center">
            <p className="fontFamily-public text-[16px] text-blueHeadings opacity-[0.7] mt-8">
              Offices in the US
            </p>
            <h2 className="fontFamily-DM text-[56px] text-redButton font-semibold">
              3
            </h2>
          </div>
          <div className="md:flex md:flex-col md:items-center flex flex-col items-center">
            <p className="fontFamily-public text-[16px] text-blueHeadings opacity-[0.7] mt-8">
              Transactions analyzed
            </p>
            <h2 className="fontFamily-DM text-[56px] text-redButton font-semibold">
              10M+
            </h2>
          </div>
        </div>
        <div className=" md:px-[40px] w-full ">
          <div className="md:w-full  md:justify-between md:items-initial md:mt-[55px]">
            <div className="md:flex md:flex-row md:justify-between md:align-baseline flex flex-col items-center">
              <h2 className="mt-[40px] md:mt-0 fontFamily-DM text-[24px] md:text-[32px] text-blueHeadings font-semibold">
                The Culture
              </h2>
              <p className="mt-4 md:mt-0 w-[315px] text-center text-[15px] text-grayWords fontFamily-public md:text-left md:w-[390px] ">
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>
            <div className="md:flex md:flex-row md:justify-between md:align-baseline md:mt-[40px] flex flex-col items-center">
              <h2 className="mt-[48px] md:mt-0 fontFamily-DM text-[24px] md:text-[32px] text-blueHeadings font-semibold">
                The People
              </h2>
              <p className="mt-4 md:mt-0 w-[315px] text-center text-[15px] text-grayWords fontFamily-public md:text-left md:w-[390px] ">
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full pb-[80px] mt-[48px] md:mt-[60px]">
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px]">
          Ready to start?
        </h2>
        <ScheduleDemo />
        <ScheduleDemoTablet />
      </div>
    </>
  );
};

export default About;
