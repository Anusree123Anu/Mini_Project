const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,

<<<<<<< HEAD

=======
  // 👇 ADD THESE
>>>>>>> c4096a7aad376612299f45f17cb617d6e992e233
  resetToken: String,
  resetTokenExpiry: Date
});

module.exports = mongoose.model("Admin", adminSchema);
