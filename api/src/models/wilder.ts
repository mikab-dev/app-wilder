import { model, Schema } from "mongoose";

const WilderSchema = new Schema({
  name: { type: String },
  city: { type: String },
  description: { type: String },
  skills: [{ title: String, votes: Number }],
});

const WilderModel = model("wilder", WilderSchema);

export default WilderModel;
