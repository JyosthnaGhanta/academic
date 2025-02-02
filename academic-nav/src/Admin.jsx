import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === "123" && password === "123") {
      navigate("/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <label>
          Username:
          <input 
            type="text" 
            placeholder="Enter username" 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            placeholder="Enter password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <button className="admin-login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;