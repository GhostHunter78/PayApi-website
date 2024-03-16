import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../formSchema";

const ContactForm = () => {
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
        className=" mt-[50px] px-6 w-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          className="w-full border border-t-0 border-l-0 border-r-0 border-b-gray-300 bg-bodyBackground outline-none  pl-5 py-2"
          type="text"
          placeholder="Name"
        />
        <br />
        {errors.name ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mt-2"
            style={{ maxWidth: "300px" }}
          >
            {errors.name.message}
          </p>
        ) : null}
        <input
          {...register("email")}
          className="w-full border border-t-0 border-l-0 border-r-0 border-b-gray-300 bg-bodyBackground outline-none mt-6  pl-5 py-2"
          type="email"
          placeholder="Email Address"
        />
        <br />
        {errors.email ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mt-2"
            style={{ maxWidth: "300px" }}
          >
            {errors.email.message}
          </p>
        ) : null}
        <input
          {...register("company")}
          className="w-full border border-t-0 border-l-0 border-r-0 border-b-gray-300 bg-bodyBackground outline-none mt-6  pl-5 py-2"
          type="text"
          placeholder="Company Name"
        />
        <br />
        {errors.company ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mt-2"
            style={{ maxWidth: "300px" }}
          >
            {errors.company.message}
          </p>
        ) : null}
        <input
          {...register("title")}
          className="w-full border border-t-0 border-l-0 border-r-0 border-b-gray-300 bg-bodyBackground outline-none mt-6  pl-5 py-2"
          type="text"
          placeholder="Title"
        />
        <br />
        {errors.title ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mt-2"
            style={{ maxWidth: "300px" }}
          >
            {errors.title.message}
          </p>
        ) : null}
        <textarea
          {...register("message")}
          className="w-full border border-t-0 border-l-0 border-r-0 border-b-gray-300 bg-bodyBackground outline-none mt-6  pl-5 py-2"
          type="text"
          placeholder="Message"
        ></textarea>
        {errors.message ? (
          <p
            className="text-sm pl-5 font-normal text-red-500 mt-2"
            style={{ maxWidth: "300px" }}
          >
            {errors.message.message}
          </p>
        ) : null}
        <label className="mt-6 text-[15px] text-blueHeadings fontFamily-public text-left flex items-center gap-6">
          <input
            type="checkbox"
            id="myCheckbox"
            className="w-[24px] h-[24px]"
          />
          Stay up-to-date with company announcements and updates to our API
        </label>
        <button
          type="submit"
          className=" mt-[37px] text-15px font-bold fontFamily-public text-blueHeadings px-10 py-2 rounded-3xl border border-solid border-blueHeadings"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
