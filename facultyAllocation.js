const mongoose = require("mongoose");

const FacultyAllocationSchema = new mongoose.Schema({
  // Faculty Reference
<<<<<<< HEAD
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
    required: true
  },
  facultyUsername: { type: String, required: true },
  facultyName: { type: String, required: true },
  facultyDesignation: {
    type: String,
    enum: ["Professor", "Associate Professor", "Assistant Professor"],
    required: true
  },
  facultyExperience: { type: Number, required: true },
  department: { type: String, required: true },

  // Subject Details
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
=======
  facultyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Faculty",
    required: true 
  },
  facultyUsername: { type: String, required: true },
  facultyName: { type: String, required: true },
  facultyDesignation: { 
    type: String,
    enum: ["Professor", "Associate Professor", "Assistant Professor"],
    required: true 
  },
  facultyExperience: { type: Number, required: true },
  department: { type: String, required: true },
  
  // Subject Details
  subjectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Subject",
    required: true 
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  },
  subjectCode: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectType: {
    type: String,
<<<<<<< HEAD
    enum: ["Theory", "Lab", "Project", "Manual"],
    required: true
  },
  subjectAbbreviation: { type: String },

  // Allocation Details
  weeklyHours: {
    type: Number,
    required: true,
    min: 1,
    max: 24
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  priority: {
    type: Number,
    required: true,
    min: 1,
    max: 25
  },

=======
    enum: ["Theory", "Lab", "Project"],
    required: true
  },
  subjectAbbreviation: { type: String }, // Optional: for display
  
  // Allocation Details
  weeklyHours: { 
    type: Number, 
    required: true,
    min: 1,
    max: 8 // Adjust based on your system
  },
  semester: { 
    type: Number, 
    required: true,
    min: 1,
    max: 8 
  },
  priority: { 
    type: Number, 
    required: true,
    min: 1,
    max: 15 
  }, // From faculty preferences
  
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  // Allocation Status
  allocationType: {
    type: String,
    enum: ["Initial", "Reallocation", "Manual", "Automatic", "Complete", "Alternating"],
    default: "Automatic"
  },
  allocationStrategy: {
    type: String,
    default: ""
  },
<<<<<<< HEAD
  weekNumber: {
    type: Number,
    required: true,
    default: 1
  },
  isActive: {
    type: Boolean,
    default: true
  },

  // Academic Year/Term
  academicYear: { type: String, required: true },
  term: {
    type: String,
    enum: ["Odd", "Even", "Summer"],
    required: true
  },

  // Parallel Subject Grouping
  parallelGroupId: { type: String, trim: true },

  // Audit Fields
  allocatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  allocationDate: {
    type: Date,
    default: Date.now
  }

}, {
  timestamps: true,
  indexes: [
    { facultyId: 1, subjectId: 1 },
=======
  weekNumber: { 
    type: Number, 
    required: true,
    default: 1 
  }, // For weekly scheduling
  isActive: { 
    type: Boolean, 
    default: true 
  },
  
  // Academic Year/Term
  academicYear: { type: String, required: true }, // e.g., "2024-2025"
  term: { 
    type: String,
    enum: ["Odd", "Even", "Summer"],
    required: true 
  },
  
  // Audit Fields
  allocatedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  }, // Admin who approved
  allocationDate: { 
    type: Date, 
    default: Date.now 
  }

}, { 
  timestamps: true,
  indexes: [
    { facultyId: 1, subjectId: 1 }, // For quick lookups
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
    { facultyId: 1, semester: 1 },
    { subjectCode: 1, semester: 1 },
    { academicYear: 1, term: 1 }
  ]
});

// Compound unique constraint - prevent duplicate allocations
FacultyAllocationSchema.index(
<<<<<<< HEAD
  { facultyId: 1, subjectId: 1, academicYear: 1, term: 1 },
=======
  { facultyId: 1, subjectId: 1, academicYear: 1, term: 1 }, 
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  { unique: true }
);

// Virtual for allocation status
<<<<<<< HEAD
FacultyAllocationSchema.virtual("allocationStatus").get(function () {
=======
FacultyAllocationSchema.virtual("allocationStatus").get(function() {
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  if (!this.isActive) return "Inactive";
  return "Active";
});

<<<<<<< HEAD
// Pre-save hook to validate and normalize - UPDATED WITH HIGHER LIMITS
// Pre-validate hook to normalize and validate
FacultyAllocationSchema.pre("validate", function () {
  // Normalize subjectType to PascalCase
  if (this.subjectType) {
    const t = this.subjectType.toString().toLowerCase();
    if (t === "theory") this.subjectType = "Theory";
    else if (t === "lab") this.subjectType = "Lab";
    else if (t === "project") this.subjectType = "Project";
    else if (t === "manual") this.subjectType = "Manual";
  }

  // Validate weekly hours based on subject type
  if (this.subjectType === "Theory" && this.weeklyHours > 12) {
    throw new Error("Theory subjects cannot exceed 12 hours per week");
  }

  if (this.subjectType === "Lab" && this.weeklyHours > 12) {
    throw new Error("Lab subjects cannot exceed 12 hours per week");
  }

  if (this.subjectType === "Project" && this.weeklyHours > 12) {
    throw new Error("Project subjects cannot exceed 12 hours per week");
  }

  // Validate priority range
  if (this.priority < 1 || this.priority > 25) {
    throw new Error("Priority must be between 1 and 25");
  }

  // Validate semester range
  if (this.semester < 1 || this.semester > 8) {
    throw new Error("Semester must be between 1 and 8");
  }
});

// Static method to check if faculty is overloaded
FacultyAllocationSchema.statics.isFacultyOverloaded = async function (facultyId, academicYear, term, maxHours) {
=======
// Pre-save hook to validate hours
FacultyAllocationSchema.pre("save", async function(next) {
  // Validate weekly hours based on subject type
  if (this.subjectType === "Theory" && this.weeklyHours > 4) {
    next(new Error("Theory subjects typically cannot exceed 4 hours per week"));
  }
  
  if (this.subjectType === "Lab" && this.weeklyHours > 6) {
    next(new Error("Lab subjects typically cannot exceed 6 hours per week"));
  }
  
  if (this.subjectType === "Project" && this.weeklyHours > 8) {
    next(new Error("Project subjects typically cannot exceed 8 hours per week"));
  }
  
  // Validate priority range
  if (this.priority < 1 || this.priority > 15) {
    next(new Error("Priority must be between 1 and 15"));
  }
  
  // Validate semester range
  if (this.semester < 1 || this.semester > 8) {
    next(new Error("Semester must be between 1 and 8"));
  }
  
  next();
});

// Static method to check if faculty is overloaded
FacultyAllocationSchema.statics.isFacultyOverloaded = async function(facultyId, academicYear, term, maxHours) {
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  const allocations = await this.find({
    facultyId,
    academicYear,
    term,
    isActive: true
  });
<<<<<<< HEAD

=======
  
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  const totalHours = allocations.reduce((sum, alloc) => sum + alloc.weeklyHours, 0);
  return totalHours > maxHours;
};

// Static method to get faculty workload summary
<<<<<<< HEAD
FacultyAllocationSchema.statics.getFacultyWorkload = async function (facultyId, academicYear, term) {
=======
FacultyAllocationSchema.statics.getFacultyWorkload = async function(facultyId, academicYear, term) {
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  const allocations = await this.find({
    facultyId,
    academicYear,
    term,
    isActive: true
  });
<<<<<<< HEAD

=======
  
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  const totalHours = allocations.reduce((sum, alloc) => sum + alloc.weeklyHours, 0);
  const theoryCount = allocations.filter(a => a.subjectType === "Theory").length;
  const labCount = allocations.filter(a => a.subjectType === "Lab").length;
  const projectCount = allocations.filter(a => a.subjectType === "Project").length;
<<<<<<< HEAD

=======
  
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  return {
    totalHours,
    theoryCount,
    labCount,
    projectCount,
    totalSubjects: allocations.length,
    allocations: allocations.map(a => ({
      subjectCode: a.subjectCode,
      subjectName: a.subjectName,
      subjectType: a.subjectType,
      weeklyHours: a.weeklyHours,
      semester: a.semester
    }))
  };
};

// Instance method to check allocation status
<<<<<<< HEAD
FacultyAllocationSchema.methods.getAllocationDetails = function () {
=======
FacultyAllocationSchema.methods.getAllocationDetails = function() {
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  return {
    facultyName: this.facultyName,
    designation: this.facultyDesignation,
    subjectCode: this.subjectCode,
    subjectName: this.subjectName,
    subjectType: this.subjectType,
    weeklyHours: this.weeklyHours,
    semester: this.semester,
    allocationType: this.allocationType,
    allocationStrategy: this.allocationStrategy,
    academicYear: this.academicYear,
    term: this.term,
    allocationDate: this.allocationDate,
    isActive: this.isActive
  };
};

module.exports = mongoose.model("FacultyAllocation", FacultyAllocationSchema);