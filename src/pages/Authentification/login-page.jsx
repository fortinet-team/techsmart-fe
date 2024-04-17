import React, { useState } from 'react';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="container-fluid d-flex align-items-center justify-content-center login">
      <div className="row col-12">
        <div className="card col-lg-4 col-md-6 mx-auto p-3 gap-3 d-flex align-items-center justify-content-center flex-column login-card">
          <div className="text-center mt-4">
            <h1 className="login-title">Login</h1>
          </div>
          <form
            id="form"
            className="form p-3 gap-3 d-flex align-items-center justify-content-center flex-column"
            style={{ width: '100%' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group col-12">
              <div className="input-group form-control login-input d-flex align-items-center">
                <input
                  type="text"
                  className=" col-12 form-control login-input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  autoComplete="username"
                  required
                  style={{
                    border: 'none',
                    background: 'none',
                  }}
                />

                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    style={{ border: 'none', background: 'none' }}
                  >
                    <i className="fas fa-user" style={{ color: 'white' }}></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group col-12">
              <div className="input-group form-control login-input d-flex align-items-center">
                <input
                  type="password"
                  className="form-control col-12 login-input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="password"
                  required
                  style={{
                    border: 'none',
                    background: 'none',
                  }}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    style={{
                      border: 'none',
                      background: 'none',
                    }}
                  >
                    <i className="fa fa-lock" style={{ color: 'white' }}></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex flex-row justify-content-between">
              <div className="checkbox">
                <label className="text-white d-flex align-items-center gap-1">
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <a href="#" className="text-white text-decoration-none">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2 col-12 button-login"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
