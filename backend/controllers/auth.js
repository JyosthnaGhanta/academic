const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authController = {
    login: async (req, res) => {
        try {
            const { regdNo, password } = req.body;
            
            console.log('Login attempt with:', { regdNo, password });

            const user = await User.findOne({ regdNo });
            
            console.log('User found:', user);

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid registration number or password'
                });
            }

            if (password !== user.password) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid registration number or password'
                });
            }

            const token = jwt.sign({ regdNo: user.regdNo }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            console.log('Login successful for:', regdNo);

            res.json({
                success: true,
                message: 'Login successful! Redirecting to dashboard...',
                token,
                user: {
                    regdNo: user.Regd.No
                }
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({
                success: false,
                message: 'Server error during login'
            });
        }
    }
};

module.exports = authController;
