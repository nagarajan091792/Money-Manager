import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${config.api}`, values);
        alert(login.data.message);
        localStorage.setItem("react_app_token", login.data.token);
        localStorage.setItem("profile", login.data.profile);
        if (login.data.message === "successfully logged in") {
          navigate("/portal/dashboard");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("login error");
      }
    },
  });
  
  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                      style={{ bordeRradius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                        className="login"
                      >
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span class="h1 fw-bold mb-0">MONEY MANAGE APP</span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="useremail"
                            class="form-control form-control-lg"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                          />
                          <label class="form-label" for="useremail">
                            Email address
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="userpassword"
                            class="form-control form-control-lg"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            required
                          />
                          <label class="form-label" for="userpassword">
                            Password
                          </label>
                        </div>
                        <input
                          type="submit"
                          value="Login"
                          className="btn btn-success  mt-2 "
                        />

                        <div className="form-group mt-4">
                          <label>
                            Don't have an account?
                            <Link style={{ color: "blue" }} to="/register">
                              {" "}
                              Register here
                            </Link>
                          </label>
                        </div>
                      </form>
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

export default Login;
