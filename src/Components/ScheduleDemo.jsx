const ScheduleDemo = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-6 px-6 w-screen">
        <input
          className="fontFamily-public px-7 pt-[10px] pb-[10px] rounded-3xl w-full text-base bg-emailInputBg focus:outline-redButton"
          type="email"
          placeholder="Enter email address"
          style={{ boxShadow: "10px 10px 25px -10px rgba(54, 83, 107, 0.25)" }}
        />
        <button
          className="fontFamily-public px-7 pt-[10px] pb-[10px] rounded-3xl w-full text-[15px] font-normal bg-redButton text-emailInputBg"
          type="submit"
        >
          Schedule a Demo
        </button>
      </div>
    </>
  );
};

export default ScheduleDemo;
