import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import login_img from "../assets/img/login_img.png";
import service from "./Service/service";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email==="123456"&&password==="123456"){
      localStorage.setItem("token","123456");
      window.location.reload();
    }
    else{
      alert("Unknown User !")
    }
  };
  return (
    <>
      {/* <img
        style={{ height: 250, width: 250, marginTop: 100, marginLeft: 250 }}
        src={login_img}
        alt="login-pic"
        className="login-pic"
      /> */}
      <section className="main_content dashboard_part ">
        <div className="main_content_iner " style={{ marginTop: -450 }}>
          <div className="container-fluid p-0">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className=" mb_30">
                  <div
                    className="row justify-content-center"
                    style={{ marginTop: "20%" }}
                  >
                    <div className="col-lg-4"></div>

                    <div className="col-lg-6">
                      <div className="login-header text-center mb-3">
                        {/* <img
                        src="../img/login_img.png"
                        alt="logo-brand"
                        className="logo"
                      /> */}
                      </div>
                      <form
                        id="login-form"
                        style={{ marginLeft: 45 }}
                        novalidate="novalidate"
                      >
                        <div className="form-group">
                          <label for="uname" className="login_input">
                            Email/Username
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            placeholder="Enter email/username"
                            style={{ width: 465 , marginTop: "30%"}}
                          />
                        </div>

                        <div className="form-group">
                          <label for="password" className="login_input">
                            Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            style={{ width: 465 }}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group text-center" align="center">
                          <button
                            className="btn btn-success"
                            type="submit"
                            onClick={handleSubmit}
                            style={{
                              backgroundColor: "#E863AE",
                              border: "none",
                              alignItems: "center",
                            }}
                          >
                            Login
                          </button>
                          <p>
                            {/* Need an account? */}
                            {/* <a data-toggle="modal" data-target="#sing_up" data-dismiss="modal" href="#"> Sign Up</a> */}
                          </p>
                        </div>

                        <div className="text-center">
                          <a
                            href="/forgot"
                            data-dismiss="modal"
                            className="pass_forget_btn"
                          >
                            Forget Password?
                          </a>
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
