const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    regdNo: { type: String, required: true, unique: true },
    CN: { type: Number, required: true },
    "CN LAB": { type: Number, required: true },
    RL: { type: Number, required: true },
    "RL LAB": { type: Number, required: true },
    MAD: { type: Number, required: true },
    "MAD LAB": { type: Number, required: true },
    BDA: { type: Number, required: true },
    "BDA LAB": { type: Number, required: true },
    Total: { type: Number, required: true }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
