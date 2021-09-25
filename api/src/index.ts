import express from "express";
import mongoose from "mongoose";
import {
  createWilder,
  getAllWilders,
  deleteWilder,
  updateWilder,
  getOneWilder,
} from "./controllers/wilder";
import WilderModel from "./models/wilder";

require("dotenv").config();

const app = express();

const connectDB = async () => {
  await mongoose.connect(
    `mongodb://${process.env.DB_URL}/${process.env.DB_NAME}?directConnection=true&serverSelectionTimeoutMS=2000`,
    {
      autoIndex: true,
    }
  );
  // eslint-disable-next-line no-console
  console.log("Connected to database");

  await WilderModel.init();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/wilders", getAllWilders);
  app.get("/wilders/:_id", getOneWilder);
  app.post("/wilders", createWilder);
  app.delete("/wilders/:_id", deleteWilder);
  app.put("/wilders/:_id", updateWilder);

  app.use((req, res) => {
    res.status(404).json({ success: false, result: "Resource does not exist" });
  });
  // start server
  // eslint-disable-next-line no-console
  app.listen(3001, () => console.log("Server started on 3001 !"));
};

connectDB();
