import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormError from "../components/UI/FormError";

const Register = () => {
  const initialValues = { first: "", email: "", password: "", last: "" };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    first: Yup.string().required("Required!"),
    last: Yup.string().required("Required!"),
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
            <div className="flex ">
              <div className="">
                <Field
                  className="p-2 w-1/2 border-b-2 border-b-[#dab0f8]"
                  type="text"
                  name="first"
                  id=""
                  placeholder="Firstname..."
                />
                <ErrorMessage name="first" component={FormError} />
              </div>
              <div className="">
                <Field
                  className="p-2 w-1/2 border-b-2 border-b-[#dab0f8]"
                  type="text"
                  name="last"
                  id="name"
                  placeholder="Lastname..."
                />
                <ErrorMessage name="last" component={FormError} />
              </div>
            </div>
            <div className="flex ">
              <div className="">
                <Field
                  className="p-2 w-1/2 border-b-2 border-b-[#dab0f8]"
                  type="number"
                  name="phone"
                  id=""
                  placeholder="Phone"
                />
                <ErrorMessage name="phone" component={FormError} />
              </div>
              <div className="">
                <Field
                  className="p-2 w-1/2 border-b-2 border-b-[#dab0f8]"
                  type="text"
                  name="profile"
                  id="name"
                  placeholder="Profile"
                />
                <ErrorMessage name="profile" component={FormError} />
              </div>
            </div>
            <div>
              <Field
                className="block p-2 border-b-2 border-b-[#dab0f8]"
                type="email"
                id="email"
                name="email"
                placeholder="Email..."
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field
                className="block p-2 border-b-2 border-b-[#dab0f8]"
                type="password"
                id="password"
                name="password"
                placeholder="Password..."
              />
              <ErrorMessage name="password" />
            </div>
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
