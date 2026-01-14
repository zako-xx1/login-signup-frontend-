// import Login form '../Assets/email.png'
import "../CSS/style.css";
import UserIcon from "../Assets/person.png";
import Email from "../Assets/email.png";
import Password from "../Assets/password.png";
import { useState } from "react";
const LoginSignup = () => {
  const [Action, SetAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{Action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {Action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={UserIcon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={Email} alt="" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={Password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {Action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forget">
          Lost Password <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={Action === "Login" ? "submit gray" : "submit"}
          onClick={() => SetAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={Action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => SetAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
