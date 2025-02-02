const users = [
    { regdNo: "221FA23023", password: "yourpassword", name: "Jyosthna" },
    { regdNo: "221FA23024", password: "password123", name: "User1" },
    { regdNo: "221FA23025", password: "pass456", name: "User2" },
    { regdNo: "221FA23026", password: "securepass", name: "User3" }
];

const login = async (req, res) => {
    try {
        console.log("Incoming login request:", req.body); 

        const { regdNo, password } = req.body;
        if (!regdNo || !password) {
            return res.status(400).json({ success: false, message: "Missing credentials" });
        }

        const user = users.find(user => user.regdNo === regdNo && user.password === password);
        console.log("User found:", user);

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        res.json({ success: true, message: "Login successful", user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error during login" });
    }
};

module.exports = { login };
