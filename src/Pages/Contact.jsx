import ContactForm from "../Components/ContactForm";
import DarkCompanies from "../Components/DarkCompanies";
import ScheduleDemo from "../Components/ScheduleDemo";
import ScheduleDemoTablet from "../Components/ScheduleDemoTablet";
import PricingCircle from "../SVGs/PricingCircle";

const Contact = () => {
  return (
    <>
      <PricingCircle />
      <img
        className="hidden absolute top-0 right-0 z-[-1]"
        src="/assets/images/mobile/prising-circle-tablet.png"
      />
      <img
        className="hidden md:hidden lg:absolute lg:z-[-1] lg:top-0 lg:right-0 lg:w-[640px] lg:block"
        src="/assets/images/mobile/desktop-pricing-circle.png"
      />
      <div className="flex flex-col items-center w-full pb-[60px] lg:px-[165px] lg:flex-row">
        <div className="flex flex-col items-center w-full  lg:items-start">
          <h2 className="fontFamily-DM text-[32px] md:text-[48px] md:w-[460px] md:leading-normal text-blueHeadings font-semibold mt-[40px] w-[300px] text-center leading-10 lg:text-[56px] lg:text-left lg:w-[730px] lg:mt-[80px]">
            Submit a help request and we’ll get in touch shortly.
          </h2>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center w-full  lg:items-start lg:mt-[170px]">
          <p className="fontFamily-DM text-[24px] md:text-[32px] text-blueHeadings opacity-[0.75] font-semibold mt-[80px] mb-[32px] text-center w-[327px] md:w-[570px] lg:text-left lg:mt-0 lg:w-[445px]">
            Join the thousands of innovators already building with us
          </p>
          <DarkCompanies />
        </div>
      </div>
      <div className="flex flex-col items-center w-full pb-[80px] mt-[48px] lg:flex-row lg:w-full lg:justify-between lg:mt-[50px] lg:mb-[50px] lg:px-[165px]">
        <h2 className="fontFamily-DM heading1 text-blueHeadings font-normal text-[32px] lg:mt-0 lg:text-[48px]">
          Ready to start?
        </h2>
        <ScheduleDemo />
        <ScheduleDemoTablet />
      </div>
    </>
  );
};

export default Contact;
