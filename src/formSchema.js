import * as yup from "yup";

const formSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  company: yup.string().required("Company name is required"),

  title: yup.string().required("Title is required"),

  message: yup.string().required("Message is required"),
});

export default formSchema;
