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

    const users = [
        { regdNo: "221FA23023", password: "23023" },
        { regdNo: "221FA23041", password: "23041"},
        { regdNo: "221FA18106", password: "18106"},
        { regdNo: "221FA18058", password: "18058" }
    ];

    // ✅ Check if user exists
    const user = users.find(user => user.regdNo === regdNo && user.password === password);

    if (user) {
        localStorage.setItem('token', "dummy-token");  // Fake token for session
        setIsLoggedIn(true);
        navigate("/dashboard");
    } else {
        setErrorMessage("Invalid registration number or password.");
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
