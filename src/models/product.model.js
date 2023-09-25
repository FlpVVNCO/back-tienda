import mongoose from "mongoose";

// revisar que el admin solamente pueda crear productos
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requiered: true,
    },
    name_image: {
      type: String,
      // required: true
    },
    imageUrl: {
      type: String,
      // required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
