const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  experience: { type: Number, required: true },
  role: { type: String, required: true },
  approved: { type: Boolean, default: false },

  maxHoursPerWeek: { type: Number, default: 20 }, 

  subjectPreferences: [
    { subject: String, priority: Number }
  ],

  timePreferences: [
    { day: String, time: String, reason: String }
  ],
  canTakeBackToBack: { type: Boolean, default: false },

  preferenceStatus: { 
    type: String, 
    enum: ["pending", "accepted", "rejected"], 
    default: "pending" 
  },
  preferenceRejectionReason: { type: String, default: "" },

<<<<<<< HEAD
=======
  // ✅ Messages for notifications
  messages: [
    {
      text: { type: String, required: true },
      date: { type: Date, default: Date.now }
    }
  ]
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233

}, { timestamps: true });

module.exports = mongoose.model("Faculty", facultySchema);
