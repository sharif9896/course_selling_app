import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const usermodel = mongoose.models.user || mongoose.model("users", userSchema);

export default usermodel;
