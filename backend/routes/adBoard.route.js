import express from "express";
import AdBoardModel from "../models/adBoard.model.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    // Sử dụng req.params.id để lấy ad boards theo location_id
    const data = await AdBoardModel.find({ location_id: req.params.id });
    if (data.length > 0) {
      res.status(200).json({
        message: "Get All Ad Boards By Location ID Successfully",
        data,
      });
    } else {
      res.status(404).json({ message: "No Ad Boards Found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newAdBoard = new AdBoardModel(req.body);
    const result = await newAdBoard.save();
    res.status(200).json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Error" });
  }
});

export default router;


// import { getAdBoardsByLocation } from "../controllers/adLocationController.js"

// router.get('/by-location/:locationId', getAdBoardsByLocation);


