import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../formSchema";

const ScheduleDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <form
        className="hidden md:grid md:relative md:mt-[40px] md:px-6 md:w-[445px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.email ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mb-[-10px] md:hidden md:mb-[5px]"
            style={{ maxWidth: "300px" }}
          >
            {errors.email.message}
          </p>
        ) : null}
        <input
          {...register("email")}
          className="fontFamily-public md:pl-7 md:pr-[160px] pt-[10px] pb-[10px] rounded-3xl w-[421px] text-base bg-emailInputBg focus:outline-redButton"
          type="email"
          placeholder="Enter email address"
          style={{ boxShadow: "10px 10px 25px -10px rgba(54, 83, 107, 0.25)" }}
        />

        <button
          className="hidden md:absolute md:right-0 md:flex md:fontFamily-public md:px-7 md:pt-[12px] md:pb-[10px] md:rounded-3xl md:w-[173px] md:text-[15px] md:font-normal md:bg-redButton md:text-emailInputBg"
          type="submit"
        >
          Schedule a Demo
        </button>
        {errors.email ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 md:mt-[5px] md:flex"
            style={{ maxWidth: "300px" }}
          >
            {errors.email.message}
          </p>
        ) : null}
      </form>
    </>
  );
};

export default ScheduleDemo;
