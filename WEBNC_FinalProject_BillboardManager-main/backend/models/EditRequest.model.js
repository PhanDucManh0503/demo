//File này sẽ định nghĩa mô hình cho yêu cầu chỉnh sửa thông tin điểm đặt quảng cáo.

import mongoose from "mongoose";

const editRequestSchema = new mongoose.Schema({
  adLocationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AdLocation",
    required: true,
  },
  newDetails: {
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
  },
  reason: String,
  requestTime: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Pending", // Các trạng thái khác có thể là 'Approved', 'Denied'
  },
});

const EditRequest = mongoose.model("EditRequest", editRequestSchema);

export default EditRequest;
