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
        className="flex flex-col items-left gap-4 mt-6 px-6 w-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.email ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mb-[-10px]"
            style={{ maxWidth: "300px" }}
          >
            {errors.email.message}
          </p>
        ) : null}
        <input
          {...register("email")}
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
      </form>
    </>
  );
};

export default ScheduleDemo;
