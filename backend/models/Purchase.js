import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref:"User"},
    courseId: {type: mongoose.Types.ObjectId, ref:"Course"},
})

const Purchasemodel = mongoose.models.Purchasse || mongoose.model("Purchase",purchaseSchema);
export default Purchasemodel;