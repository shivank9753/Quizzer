import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const initialValues = { email: "", password: "" };
  const onSubmit = (values) => {
    console.log(values);
    if (values) {
      const user = values.email;
      const pwd = values.password;
      const roles = [2001, 2002, 2003];
      const accessToken = "asdasdasdghasdgashdgjadg";
      setAuth({ user, pwd, roles, accessToken });
      navigate(from, { replace: true });
    }
  };
  const validationSchema = Yup.object({
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
            <h1 className="text-[#8e84fb] text-2xl font-bold">Login</h1>
            <Field
              className="block p-2 border-b-2 border-b-[#dab0f8]"
              type="email"
              name="email"
              placeholder="Email..."
              id="email"
            />
            <ErrorMessage name="email" />
            <Field
              className="block p-2 border-b-2 border-b-[#dab0f8]"
              type="password"
              name="password"
              placeholder="Password..."
              id="password"
            />
            <ErrorMessage name="password" />
            <button
              className="p-2 bg-blue-500 text-white rounded hover:bg-purple-700 duration-300"
              type="submit"
            >
              Login
            </button>
            <div className="signup_link">
              Not a member?
              <Link to="/register">Signup</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
