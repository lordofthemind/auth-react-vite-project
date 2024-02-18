import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Username is required"),
  password: Yup.string().min(8).max(40).required("Password is required"),
});
