import React from "react";

const BSform = () => {
  return (
    <div>
      <div>
        <h2
          style={{
            backgroundColor: "GrayText",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Bootstrap Form
        </h2>
      </div>
      <div>
        <form className="border border-dark p-4 rounded" >
          {/* Email Row */}
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="col-sm-3 col-form-label">
              Email Address
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </div>

          {/* Password Row */}
          <div className="row mb-3">
            <label htmlFor="exampleInputPassword1" className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          {/* Gender Row */}
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Gender</label>
            <div className="col-sm-9">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  id="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  id="female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button Row */}
          <div className="row">
            <div className="offset-sm-3 col-sm-9">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BSform;
