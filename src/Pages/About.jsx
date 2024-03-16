import ScheduleDemo from "../Components/ScheduleDemo";
import PricingCircle from "../SVGs/PricingCircle";

const About = () => {
  return (
    <>
      <PricingCircle />
      <div className="flex flex-col items-center w-full">
        <h2 className="fontFamily-DM text-[32px] text-blueHeadings font-semibold mt-[40px] w-[300px] text-center leading-10">
          We empower innovators by delivering access to the financial system
        </h2>
        <h2 className="mt-[40px] fontFamily-DM text-[24px] text-blueHeadings font-semibold">
          Our Vision
        </h2>
        <p className="mt-4 w-[315px] text-center text-[15px] text-grayWords fontFamily-public ">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
        <h2 className="mt-[48px] fontFamily-DM text-[24px] text-blueHeadings font-semibold">
          Our Business
        </h2>
        <p className="mt-4 w-[315px] text-center text-[15px] text-grayWords fontFamily-public ">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
        <img
          className="mt-[75px] w-full"
          src="/assets/images/mobile/about-page-image.png"
        />
      </div>
      <div className="flex flex-col items-center w-full px-6 mt-[30px]">
        <div className="w-full flex flex-col items-center pt-4 pb-5 border border-l-0 border-r-0 border-b-gray-300 border-t-gray-300 mt-6">
          <p className="fontFamily-public text-[16px] text-blueHeadings opacity-[0.7]">
            Team Members
          </p>
          <h2 className="fontFamily-DM text-[56px] text-redButton font-semibold">
            300+
          </h2>
          <p className="fontFamily-public text-[16px] text-blueHeadings opacity-[0.7] mt-8">
            Offices in the US
          </p>
          <h2 className="fontFamily-DM text-[56px] text-redButton font-semibold">
            3
          </h2>
          <p className="fontFamily-public text-[16px] text-blueHeadings opacity-[0.7] mt-8">
            Transactions analyzed
          </p>
          <h2 className="fontFamily-DM text-[56px] text-redButton font-semibold">
            10M+
          </h2>
        </div>
        <h2 className="mt-[40px] fontFamily-DM text-[24px] text-blueHeadings font-semibold">
          The Culture
        </h2>
        <p className="mt-4 w-[315px] text-center text-[15px] text-grayWords fontFamily-public ">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
        <h2 className="mt-[48px] fontFamily-DM text-[24px] text-blueHeadings font-semibold">
          The People
        </h2>
        <p className="mt-4 w-[315px] text-center text-[15px] text-grayWords fontFamily-public ">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
      <div className="flex flex-col items-center w-full pb-[80px] mt-[48px]">
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px]">
          Ready to start?
        </h2>
        <ScheduleDemo />
      </div>
    </>
  );
};

export default About;
