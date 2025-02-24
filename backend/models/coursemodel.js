import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    public_id: { type: String, required: true },
    url: { type: Array, required: true },
  },
  creatorId: {type: mongoose.Types.ObjectId, ref:"user"},
});

const coursemodel = mongoose.models.course || mongoose.model("courses", courseSchema);

export default coursemodel;
