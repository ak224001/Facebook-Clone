import "./register.css";
export default function Register() {
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
            <input className="loginInput" type="text" placeholder="User Name" />
            <input className="loginInput" placeholder="Email" />
            <input className="loginInput" placeholder="Password" />
            <input className="loginInput" placeholder="Confirm Password" />
            <button className="loginButton">Sign Up</button>
            <button className="signupButton">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
