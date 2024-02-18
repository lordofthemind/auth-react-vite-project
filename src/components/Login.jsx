// Import necessary dependencies
import React from "react";
import loginBackground from "../assets/FogInForest.jpg";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
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
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:9090/login",
          values
        );
        console.log("Login Succesfull", response.data);
        resetForm();
      } catch (error) {
        console.error("Login Failed", error);
      }
      console.log(values);
    },
  });
  console.log(errors);

  return (
    <div className="relative h-screen overflow-hidden flex">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover w-screen h-screen"
        style={{ backgroundImage: `url(${loginBackground})` }}
      />

      {/* Right Split with Login Form */}
      <div className=" fixed flex-1 flex items-center justify-center relative z-10">
        {/* Form Container */}
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-6">Login</h1>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                className="block text-gray-700 text-sm font-bold mb-2"
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

            <button
              className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
