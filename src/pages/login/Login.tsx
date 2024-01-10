import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const authContext: any = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <form>
        <div className="card mt-5 p-5 bg-secondary w-50 mx-auto text-white">
          <div className="row">
            <div className="form-group">
              <h2 className="text-center">LOGIN</h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-12">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
          </div>
          <div className="row text-center mt-2">
            <div className="col-12">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  authContext.setIsAuthenticated(true);
                  navigate("/");
                  localStorage.setItem("token", "abc");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
