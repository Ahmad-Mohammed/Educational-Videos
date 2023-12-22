import "./RegisterTeacher.css";
import { Link } from "react-router-dom";

const RegisterTeacher = () => {
  return (
    <>
      <div class="login-main-wrapper">
        <div class="container-fluid pl-0 pr-0">
          <div class="row no-gutters">
            <div class="col-md-12 p-5  full-height">
              <div class="login-main-left">
                <div class="text-center mb-5 login-main-left-header pt-2">
                  <h1>REGISTER</h1>

                  <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                </div>
                <form action="#">
                  <div class="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div class="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter mobile number"
                    />
                  </div>
               
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>Competence</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>perthday</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>Your CV</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>Your Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="form-group">
                    <label>Your Channel Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                    />
                  </div>
                  <div class="mt-4">
                    <Link to="/done">
                    <button
                      type="submit"
                      class="btn buttonlog btn-block btn-lg"
                    >
                      Sign Up
                    </button>
                    </Link>
                  </div>
                </form>
                <div class="text-center mt-5">
                  <p class="light-gray">
                    Already have an Account? <Link to="/login">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login-main-wrapper">
        
      </div>
    </>
  );
};

export default RegisterTeacher;
