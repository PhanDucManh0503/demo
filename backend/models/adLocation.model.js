import mongoose from "mongoose";

const adLocationSchema = new mongoose.Schema({
  name: String,
  address: String,
  area: String,
  locationType: String,
  advertisingType: String,
  image: String,
  planned: Boolean,
  coordinates: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  boards: [boardSchema], // Thêm mảng các bảng quảng cáo
});

adLocationSchema.index({ coordinates: "2dsphere" });

const AdLocationModel = mongoose.model("AdLocation", adLocationSchema);

export default AdLocationModel;
