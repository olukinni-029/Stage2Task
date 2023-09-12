const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true,'please enter a valid name']
    },
    Age: {
      type: Number,
      required: [true,'please enter a valid name']
    },
    Email: {
      type: String,
      required: [true,'please enter a valid email'],
      unique: true,
      alphanumeric: true,
      
    },

    
  },
  {
    timestamps: true,
    versionKey:false,

  }
);

module.exports = mongoose.model("User", userSchema);
