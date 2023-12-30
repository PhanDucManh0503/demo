import EditRequest from "../models/EditRequest.model";

// Tạo một yêu cầu chỉnh sửa mới
export const createEditRequest = async (req, res) => {
  try {
    const newEditRequest = new EditRequest({
      ...req.body,
    });
    await newEditRequest.save();
    res.status(201).json(newEditRequest);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tạo yêu cầu chỉnh sửa", error });
  }
};

// Lấy tất cả các yêu cầu chỉnh sửa
export const getAllEditRequests = async (req, res) => {
  try {
    const editRequests = await EditRequest.find();
    res.json(editRequests);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy yêu cầu chỉnh sửa", error });
  }
};

// Cập nhật yêu cầu chỉnh sửa
export const updateEditRequest = async (req, res) => {
  try {
    const updatedEditRequest = await EditRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEditRequest) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy yêu cầu chỉnh sửa" });
    }
    res.json(updatedEditRequest);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật yêu cầu chỉnh sửa", error });
  }
};

// Xóa yêu cầu chỉnh sửa
export const deleteEditRequest = async (req, res) => {
  try {
    const deletedEditRequest = await EditRequest.findByIdAndDelete(
      req.params.id
    );
    if (!deletedEditRequest) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy yêu cầu chỉnh sửa" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa yêu cầu chỉnh sửa", error });
  }
};

export default {
  createEditRequest,
  getAllEditRequests,
  updateEditRequest,
  deleteEditRequest,
};
