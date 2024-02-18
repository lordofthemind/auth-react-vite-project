import { useFormik } from "formik";
import { registerSchema } from "../schemas";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:9090/register",
          values
        );
        console.log("Registration Succesfull", response.data);
        resetForm();
      } catch (error) {
        console.error("Registration Failed", error);
      }
      console.log(values);
    },
  });
  console.log(errors);
  return (
    <>
      {/* Form Container */}
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">Register</h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name="username"
              id="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ? (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="password"
            >
              Confirm Password:
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword}
              </p>
            ) : null}
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
