import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
    const [regdNo, setRegdNo] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            console.log('Attempting login with:', { regdNo }); 

            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ regdNo, password }),
            });

            const data = await response.json();
            console.log('Login response:', data); 

            if (data.success) {
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                navigate("/dashboard");
            } else {
                setErrorMessage(data.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage("Network error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Regd.No:
                    <input 
                        type="text" 
                        placeholder="Registration Number" 
                        value={regdNo}
                        onChange={(e) => setRegdNo(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </label>
                <button className="login" type="submit">Login</button>
                <br />
                <Link to="/admin">Admin</Link>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default LoginPage;