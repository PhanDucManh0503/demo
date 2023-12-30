import express from "express";
import AdLocationModel from "../models/adLocation.model.js";
const router = express.Router();



import { editAdLocation } from '../controllers/adLocationController.js';

// Đường dẫn cho việc cập nhật thông tin điểm đặt quảng cáo
router.post('/edit', editAdLocation);


router.get("/", async (req, res) => {
  try {
    const data = await AdLocationModel.find();
    console.log(data);
    if (data) {
      res.status(200).json({
        message: "Get All Ad Location Successfully",
        data,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Error",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const newAdLocation = new AdLocationModel(req.body);
    console.log(req.body);
    const result = await newAdLocation.save();
    console.log(result);

    res.status(200).json({
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Error",
    });
  }
});

// Route mới để lấy các địa điểm quảng cáo theo khu vực
router.get("/area/:area", async (req, res) => {
  try {
    const { area } = req.params;
    const data = await AdLocationModel.find({ area });
    res.status(200).json({ message: "Success", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Error" });
  }
});




export default router;
