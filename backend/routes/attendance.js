const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance'); // Assuming you have an Attendance model

// GET attendance for a specific RegdNo
router.post('/get-attendance', async (req, res) => {
  try {
    const { regdNo } = req.body;

    // Find the attendance record by RegdNo
    const attendance = await Attendance.findOne({ RegdNo: regdNo });

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance not found' });
    }

    // Return the attendance data
    res.json(attendance);
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ message: 'Error fetching attendance' });
  }
});

module.exports = router;
