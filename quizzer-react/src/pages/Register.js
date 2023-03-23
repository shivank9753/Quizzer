import React from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL, routes } from "../constant/apiRoutes";

const Register = () => {
  const initialValues = {
    first: "",
    last: "",
    phone: "",
    username: "",
    profile: "",
    email: "",
    password: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    const registerData = {
      emailId: values.email,
      username: values.username,
      profile: values.profile,
      password: values.password,
      enabled: true,
      firstName: values.first,
      lastName: values.last,
      userRole: "USER",
      userId: 0,
      phone: values.phone,
    };
    console.log(registerData);
    try {
      const result = await axios.post(
        `${BASE_URL}${routes.registerUser}`,
        registerData
      );
      if (result) {
        resetForm({ values: "" });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object({
    first: Yup.string().required("Required!"),
    last: Yup.string().required("Required!"),
    username: Yup.string().required("Required!"),
    profile: Yup.string().required("Required!"),
    phone: Yup.number("Please enter a number").required("Required!"),
    email: Yup.string().email("Invalid Email Format!").required("Required!"),
    password: Yup.string().min(6).required("Required!"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="selection:bg-rose-500 selection:text-white">
      <div className="min-h-screen bg-rose-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="bg-white rounded-3xl mx-auto overflow-hidden shadow-xl w-[80vw] md:w-1/2 lg:w-1/2">
            <div className="relative h-28 bg-rose-500 rounded-bl-4xl ">
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity={1}
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
            </div>
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">Register</h1>
              <form className="" onSubmit={formik.handleSubmit}>
                <div className="flex gap-5">
                  <div className=" mt-10 relative">
                    <input
                      id="first"
                      name="first"
                      type="text"
                      className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                        formik.touched.first && formik.errors.first
                          ? "placeholder-red-500"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      value={formik.values.first}
                      onBlur={formik.handleBlur}
                      placeholder={
                        formik.touched.first && formik.errors.first
                          ? formik.errors.first
                          : ""
                      }
                    />
                    <label
                      htmlFor="first"
                      className={
                        formik.touched.first && formik.errors.first
                          ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                          : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      }
                    >
                      Firstname
                    </label>
                  </div>
                  <div className=" mt-10 relative">
                    <input
                      id="last"
                      name="last"
                      type="text"
                      className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                        formik.touched.last && formik.errors.last
                          ? "placeholder-red-500"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      value={formik.values.last}
                      onBlur={formik.handleBlur}
                      placeholder={
                        formik.touched.last && formik.errors.last
                          ? formik.errors.last
                          : ""
                      }
                    />
                    <label
                      htmlFor="last"
                      className={
                        formik.touched.last && formik.errors.last
                          ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                          : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      }
                    >
                      Lastname
                    </label>
                  </div>
                </div>
                <div className=" mt-10 relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                      formik.touched.username && formik.errors.username
                        ? "placeholder-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.username && formik.errors.username
                        ? formik.errors.username
                        : ""
                    }
                  />
                  <label
                    htmlFor="username"
                    className={
                      formik.touched.username && formik.errors.username
                        ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                        : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    }
                  >
                    Username
                  </label>
                </div>
                <div className=" mt-10 relative">
                  <input
                    id="profile"
                    name="profile"
                    type="text"
                    className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                      formik.touched.profile && formik.errors.profile
                        ? "placeholder-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.profile}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.profile && formik.errors.profile
                        ? formik.errors.profile
                        : ""
                    }
                  />
                  <label
                    htmlFor="profile"
                    className={
                      formik.touched.profile && formik.errors.profile
                        ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                        : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    }
                  >
                    Profile
                  </label>
                </div>
                <div className=" mt-10 relative">
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                      formik.touched.phone && formik.errors.phone
                        ? "placeholder-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.phone && formik.errors.phone
                        ? formik.errors.phone
                        : ""
                    }
                  />
                  <label
                    htmlFor="phone"
                    className={
                      formik.touched.phone && formik.errors.phone
                        ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                        : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    }
                  >
                    Phone
                  </label>
                </div>
                <div className=" mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                      formik.touched.email && formik.errors.email
                        ? "placeholder-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ""
                    }
                  />
                  <label
                    htmlFor="email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                        : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    }
                  >
                    Email
                  </label>
                </div>
                <div className=" mt-10 relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                      formik.touched.password && formik.errors.password
                        ? "placeholder-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : ""
                    }
                  />
                  <label
                    htmlFor="password"
                    className={
                      formik.touched.password && formik.errors.password
                        ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                        : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    }
                  >
                    Password
                  </label>
                </div>
                <input
                  type="submit"
                  value="Sign in"
                  className="mt-12 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
              <div className="mt-4 block text-sm text-center font-medium text-rose-600">
                Already a member?
                <Link
                  to="/login"
                  className="ml-2 text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  or Signin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
