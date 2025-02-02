const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
        console.log('Attempting login with:', { regdNo });

        const response = await fetch("https://academic-navigator-backend.onrender.com/api/auth/login", { 
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
