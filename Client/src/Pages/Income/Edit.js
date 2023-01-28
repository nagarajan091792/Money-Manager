import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { config } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";



function Incomeedit() {
  let navigate = useNavigate();
  let params = useParams();
  useEffect ( () => {fetchData ()}, []);
  let fetchData = async () => {
    try {
         let a = await axios.get(
                `${config.api}/portal/incomelist/edit/${params.id}`,
                {
                  headers: {
                     authorization: `${localStorage.getItem("react_app_token")}`,
                  },
           }
         );
    
        formik.setValues(a.data);
       } catch (error){
        console.log(error)
       }}

  const formik = useFormik({
    initialValues: {
      description: "",
      dateandtime: "",
      catagory: "",
      divisions: "",
      amount: "",
    },

    validate: (values) => {
      let error = {};
      if (!values.description) {
        error.description = "Please enter your description";
      }
      if (
        values.description &&
        (values.description.length <= 5 || values.description.length > 80)
      ) {
        error.description = "Description must be between 5 to 80 Characters";
      }
      if (!values.dateandtime) {
        error.dateandtime = "Please select your dateandtime";
      }
      if (!values.catagory) {
        error.catagory = "Please enter your catagory";
      }
      if (
        values.catagory &&
        (values.catagory.length <= 5 || values.catagory.length > 30)
      ) {
        error.catagory = "Catagory must be between 5 to 30 Characters";
      }
      if (!values.divisions) {
        error.divisions = "Please select your divisions";
      }
      if (!values.amount) {
        error.amount = "Please select your amount";
      }

      return error;
    },
    
    onSubmit: async (values) => {
             try {
               delete values._id;
               await axios.put(
                 `${config.api}/portal/incomelist/edit/${params.id}`,
                 values,
                 {
                   headers: {
                     authorization: `${localStorage.getItem("react_app_token")}`,
                   },
               }
               );
               alert("Update Successfully")
               navigate("/portal/incomelist");
           } catch (error) {
             console.log(error);
             }
           },
        });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  type={"text"}
                  className={`form-control ${
                    formik.touched.description && formik.errors.description
                      ? "error-box"
                      : "null"
                  } ${
                    formik.touched.description && !formik.errors.description
                      ? "success-box"
                      : "null"
                  }`}
                />
                {formik.errors.description ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.description}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Catagory</label>
                
                <input name="catagory" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.catagory}
                type={"text"}
                 className={`form-control ${
                  formik.touched.catagory && formik.errors.catagory
                    ? "error-box"
                    : "null"
                } ${
                  formik.touched.catagory && !formik.errors.catagory
                    ? "success-box"
                    : "null"
                }`} />
                {formik.errors.catagory ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.catagory}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Divisions</label>
                <select name="divisions" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.divisions}
                className={`form-control ${
                  formik.touched.divisions && formik.errors.divisions
                    ? "error-box"
                    : "null"
                } ${
                  formik.touched.divisions && !formik.errors.divisions
                    ? "success-box"
                    : "null"
                }`}>
                  <option value={""}></option>
                  <option va>Office</option>
                  <option>Personal</option>
                </select>
                {formik.errors.divisions ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.divisions}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Date</label>
                <input
                  name="dateandtime"
                  type={"datetime-local"}
                  onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateandtime}
                  className={`form-control ${
                    formik.touched.dateandtime && formik.errors.dateandtime
                      ? "error-box"
                      : "null"
                  } ${
                    formik.touched.dateandtime && !formik.errors.dateandtime
                      ? "success-box"
                      : "null"
                  }`}
                />
                {formik.errors.dateandtime ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.dateandtime}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Amount</label>
                <input name="amount" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
                type={"number"} className={`form-control ${
                  formik.touched.amount && formik.errors.amount
                    ? "error-box"
                    : "null"
                } ${
                  formik.touched.amount && !formik.errors.amount
                    ? "success-box"
                    : "null"
                }`} />
                {formik.errors.amount ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.amount}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <button type={"submit"} className="btn btn-primary" >Update </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Incomeedit;

