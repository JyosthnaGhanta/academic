const User = require('../models/User');

const dashboardController = {
    getPersonalDetails: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId).select('-password');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user.personalDetails);
        } catch (error) {
            console.error('Dashboard error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    // Add other dashboard-related controller functions here
    getDashboardData: async (req, res) => {
        try {
            // Mock data for dashboard features
            const dashboardData = {
                attendance: "85%",
                currentSemester: "6th",
                lastLogin: new Date(),
                notifications: []
            };
            res.json(dashboardData);
        } catch (error) {
            console.error('Dashboard data error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

module.exports = dashboardController;
