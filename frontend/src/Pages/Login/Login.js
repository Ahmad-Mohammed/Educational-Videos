import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LOGIN = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("email", email);
    formData1.append("password", password);
    await axios
      .post("http://127.0.0.1:8000/api/auth/login", formData1)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(({ response }) => {
        // eslint-disable-next-line eqeqeq
        if (response.status == 422) {
          console.log(response.data.error);
        } else {
          console.log(response.data.message);
        }
      });
  };
  return (
    <section class="login-main-wrapper">
      <div class="container-fluid pl-0 pr-0">
        <div class="row no-gutters">
          <div class="col-md-12 p-5 full-height">
            <div class="login-main-left">
              <div class="text-center mb-5 login-main-left-header pt-4">
                <h1>LOG-IN</h1>
                <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
              </div>
              <form onSubmit={LOGIN}>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter mobile number"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="mt-4">
                  <div class="row">
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn buttonlog btn-block btn-lg"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="text-center mt-2">
                <p class="light-gray">
                  Don’t have an account?
                  <Link to="/register">Sign Up</Link>
                  Don’t forgot a password?
                  <Link to="/forgot">forgot</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
