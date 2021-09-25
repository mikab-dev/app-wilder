import { Request, Response } from "express";

import WilderModel from "../models/wilder";

const createWilder = async (req: Request, res: Response) => {
  const wilder = new WilderModel(req.body);
  try {
    const result = await wilder.save();
    res.json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, result: (error as Error).message });
  }
};

const deleteWilder = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id } = req.params;
  const result = await WilderModel.deleteOne({ _id });

  if (result.deletedCount === 0) {
    res.json({ sucess: false, result: "Wilder does not exist" });
  }
  res.json({ sucess: true, result });
};

const getAllWilders = async (req: Request, res: Response) => {
  const allWilders = await WilderModel.find();

  res.json({ success: true, result: allWilders });
};
const getOneWilder = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id } = req.params;
  const oneWilder = await WilderModel.findOne({ _id });

  res.json({ success: true, result: oneWilder });
};

const updateWilder = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id } = req.params;
  const result = await WilderModel.updateOne({ _id }, req.body);
  res.json({ success: true, result });
};

export {
  createWilder,
  getAllWilders,
  deleteWilder,
  updateWilder,
  getOneWilder,
};
