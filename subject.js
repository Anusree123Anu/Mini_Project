const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
<<<<<<< HEAD
  code: {
    type: String,
    required: true,
=======
  code: { 
    type: String, 
    required: true, 
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
    unique: true,
    uppercase: true,
    trim: true
  },
  name: { type: String, required: true },
  abbreviation: { type: String },
  type: {
    type: String,
<<<<<<< HEAD
    enum: ["Theory", "Lab", "Project", "Manual"],
    required: true
  },
  hours: {
    type: Number,
    required: true,
    min: 0,  // ← CHANGED FROM 1 TO 0
    max: 24
  },
  weeklyHours: { type: Number }, // Alias for hours
  credit: { type: Number, required: true },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  department: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },

  // Allocation Status
  available: { type: Boolean, default: true },
  allocated: { type: Boolean, default: false },
  allocatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty"
  },

=======
    enum: ["Theory", "Lab", "Project"],
    required: true
  },
  hours: { 
    type: Number, 
    required: true,
    min: 1,
    max: 8 
  },
  weeklyHours: { type: Number }, // Alias for hours
  credit: { type: Number, required: true },
  semester: { 
    type: Number, 
    required: true,
    min: 1,
    max: 8 
  },
  // REMOVE department field entirely
  // department: { type: String, required: true }, // DELETE THIS LINE
  
  // Allocation Status
  available: { type: Boolean, default: true },
  allocated: { type: Boolean, default: false },
  allocatedTo: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Faculty" 
  },
  
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  // Course Details
  courseType: {
    type: String,
    enum: ["Core", "Elective", "Lab", "Project", "Seminar"],
    default: "Core"
  },
  prerequisites: [{ type: String }], // Array of subject codes
<<<<<<< HEAD

  // Academic Year
  academicYear: { type: String }, // e.g., "2024-2025"
  term: {
    type: String,
    enum: ["Odd", "Even", "Summer"]
  },

  // Parallel Subject Grouping
  parallelGroupId: { type: String, trim: true }
=======
  
  // Academic Year
  academicYear: { type: String }, // e.g., "2024-2025"
  term: { 
    type: String,
    enum: ["Odd", "Even", "Summer"]
  }
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233

}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);