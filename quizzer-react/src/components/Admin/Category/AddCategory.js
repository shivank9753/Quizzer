import { useFormik } from "formik";
import React, { useCallback, useEffect } from "react";
import * as Yup from "yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const AddCategory = ({ show, onClose }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
  });
  const initialValues = {
    title: "",
    description: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    const categoryData = {
      title: values.title,
      description: values.description,
    };
    console.log(categoryData);
    // try {
    //   const result = await axios.post(
    //     `${BASE_URL}${routes.loginUser}`,
    //     loginData
    //   );
    //   if (result) {
    //     navigate("/admin");
    //   }
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed bg-black bg-opacity-50 flex justify-center items-center top-0 bottom-0 left-0 right-0"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="" onSubmit={formik.handleSubmit}>
          <div className=" mt-10 relative">
            <input
              id="title"
              name="title"
              type="text"
              className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                formik.touched.title && formik.errors.title
                  ? "placeholder-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              placeholder={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : ""
              }
            />
            <label
              htmlFor="title"
              className={
                formik.touched.title && formik.errors.title
                  ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                  : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              }
            >
              Title
            </label>
          </div>
          <div className=" mt-10 relative">
            <textarea
              rows="5"
              cols="40"
              id="description"
              name="description"
              type="textbox"
              className={`border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600  ${
                formik.touched.description && formik.errors.description
                  ? "placeholder-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
              placeholder={
                formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : ""
              }
            />
            <label
              htmlFor="description"
              className={
                formik.touched.description && formik.errors.description
                  ? `absolute left-0 -top-3.5 text-red-600 text-sm
                      `
                  : "absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              }
            >
              Description
            </label>
          </div>
          <input
            type="submit"
            value="Add Category"
            className="mt-12 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
          />
        </form>
      </div>
      <button onClick={onClose}>
        <GrClose className="absolute text-white top-1 right-1 text-lg duration-300 hover:text-2xl hover:text-red-400" />
      </button>
    </div>
  );
};

export default AddCategory;
