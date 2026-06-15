const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNo: String,
  name: String,
  regNo: { type: String, unique: true, required: true },  // Added required: true
<<<<<<< HEAD
  universityRegNo: { type: String, unique: true, sparse: true }, // explicitly maps the parser to bypass Mongoose stripping the field
=======
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  mobile: String,
  email: { type: String, unique: true, required: true },
  password: String,  // This field exists but isn't used in your current logic

<<<<<<< HEAD
  // Semester details
  semester: { type: Number, default: null },
  semesterType: { type: String, enum: ["Odd", "Even"], default: null },

=======
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  // For login token functionality
  loginToken: String,
  loginTokenExpiry: Date,

  // ✅ REQUIRED FOR EXCEL LOGIC
  uploadedFromExcel: { type: Boolean, default: false },
  uploadBatchId: { type: String, default: null }
});

// Optional: Add index for faster email queries
studentSchema.index({ email: 1 });
studentSchema.index({ regNo: 1 });

module.exports = mongoose.model("Student", studentSchema);