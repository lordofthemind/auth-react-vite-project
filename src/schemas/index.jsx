import * as Yup from "yup";

const loginSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Username is required"),
  password: Yup.string().min(8).max(40).required("Password is required"),
});

const registerSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(8).max(40).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export { loginSchema, registerSchema };
