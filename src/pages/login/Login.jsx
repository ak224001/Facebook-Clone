import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeft">
          <span className="loginTitle">Facebook</span>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" type="email" placeholder="Email" />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
            />
            <button className="loginButton">Log In</button>
            <span className="forgetPassword">Forget Password</span>
            <button className="signupButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
