import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { _userLogin } from "../services/loginServices";

function Login(props) {
    const navigate = useNavigate();

    const [email, set_email] = useState("");
    const [password, set_password] = useState("");

    const submitLogin = async (e) => {
        e.preventDefault();
        _userLogin(email, password,navigate);
    };

    return (
        <div>
            <div className="container">
                <main className="signup-container center">
                    <h1 className="heading-primary">
                        Log in<span className="span-blue">.</span>
                    </h1>
                    <p className="text-mute">
                        Enter your credentials to access your account.
                    </p>
                    <form className="signup-form" onSubmit={(e) => submitLogin(e)}>
                        <label className="inp">
                            <input
                                type="email"
                                className="input-text"
                                placeholder="&nbsp;"
                                value={email}
                                onChange={(e) => set_email(e.target.value)}
                            />
                            <span className="label">Email</span>
                            <span className="input-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                        </label>
                        <label className="inp">
                            <input
                                type="password"
                                className="input-text"
                                placeholder="&nbsp;"
                                id="password"
                                value={password}
                                onChange={(e) => set_password(e.target.value)}
                            />
                            <span className="label">Password</span>
                            <span className="input-icon input-icon-password" data-password>
                                <i className="fa-solid fa-eye"></i>
                            </span>
                        </label>
                        <button className="btn-login" type="submit">
                            Login
                        </button>
                    </form>
                    <p className="text-mute">
                        Not a member? <Link to="/signup">Sign up</Link>
                    </p>
                </main>
            </div>
        </div>
    );
}

export default Login;
