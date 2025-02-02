const User = require('../models/User'); // Import User Model

const login = async (req, res) => {
    const { regdNo, password } = req.body;
    try {
        const user = await User.findOne({ regdNo });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error during login" });
    }
};

module.exports = { login };
