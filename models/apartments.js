import mongoose, { Schema } from "mongoose";

// Define apartment schema
var apartmentSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  photo: String,
  city: String,
  days: Array,
  times: Array
});

// Export Mongoose model
export default mongoose.model("apartment", apartmentSchema);
