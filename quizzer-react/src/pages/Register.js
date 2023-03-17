import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const initialValues = { name: "", email: "", password: "" };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format!").required("Required!"),
    password: Yup.string().required("Required!"),
  });

  return (
    <>
      <div className="flex flex-row h-screen w-screen justify-center items-center p-5 bg-center bg-cover bg-no-repeat bg-bg-image">
        <div className="block bg-cover bg-no-repeat h-[80vh] w-[40vw] max-w-[370px] bg-side-image" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col bg-white p-5 items-stretch h-[80vh] w-[40vw] justify-evenly">
            <h1 className="text-[#8e84fb] text-2xl font-bold">Register</h1>
            <Field
              className="block p-2 border-b-2 border-b-[#dab0f8]"
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
            />
            <ErrorMessage name="name" />
            <Field
              className="block p-2 border-b-2 border-b-[#dab0f8]"
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
            />
            <ErrorMessage name="email" />
            <Field
              className="block p-2 border-b-2 border-b-[#dab0f8]"
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
            />
            <ErrorMessage name="password" />
            <button
              className="p-2 bg-blue-500 text-white rounded hover:bg-purple-700 duration-300"
              type="submit"
            >
              SignUp
            </button>
            <div className="signup_link">
              Already a member?
              <Link to="/login">Login</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Register;
