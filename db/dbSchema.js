import mongoose from "mongoose";

const tinderCards = new mongoose.Schema({
    name: String,
    url:String
})

export default mongoose.model("cards",tinderCards)