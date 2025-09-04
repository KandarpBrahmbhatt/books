import { useAuth } from "../../AuthContext";
import "../Login/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    login();
    navigate("/product");
    toast.success("Login successful!");
    localStorage.setItem("keeplogedIn",JSON.stringify(true));
    navigate("/product");
  };

  const notify = () => toast("fill all the data");

  return (
    <div className="loginform">
      <form className="login-f" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={notify}>Login</button>
        
         <ToastContainer />
      </form>
    </div>
  );
}

export default LoginForm;