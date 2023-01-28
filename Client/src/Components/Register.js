import React from "react";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../config";

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const register = await axios.post(`${config.api}/register`, values);

        alert(register.data.message);
        navigate("/");
      } catch (error) {
        console.log("register error");
      }
    },
  });

  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                        className="register"
                        class="mx-1 mx-md-4"
                      >
                        <div class="d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              class="form-control"
                              name="username"
                              onChange={formik.handleChange}
                              value={formik.values.username}
                              required
                            />
                            <label class="form-label" for="name">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="useremail"
                              class="form-control"
                              name="email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              required
                            />
                            <label class="form-label" for="useremail">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="userpassword"
                              class="form-control"
                              name="password"
                              onChange={formik.handleChange}
                              value={formik.values.password}
                              required
                            />
                            <label class="form-label" for="userpassword">
                              Password
                            </label>
                          </div>
                        </div>

                        <input
                          type="submit"
                          value="Register"
                          className="btn btn-success"
                        />

                        <div className="form-group mt-4">
                          <label className="rlab ">
                            Already have an account?
                            <Link style={{ color: "red" }} to="/">
                              {" "}
                              Login
                            </Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample imaged"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
