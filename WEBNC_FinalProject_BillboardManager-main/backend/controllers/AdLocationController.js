import AdLocation from '../models/AdLocation.model';
import EditRequest from '../models/EditRequest.model';

export const getAllAdLocations = async (req, res) => {
  try {
    const adLocations = await AdLocation.find();
    res.json(adLocations);
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi lấy dữ liệu', error });
  }
};

export const getAdLocationById = async (req, res) => {
  try {
    const adLocation = await AdLocation.findById(req.params.id);
    if (!adLocation) {
      return res.status(404).send({ message: 'Không tìm thấy điểm đặt quảng cáo' });
    }
    res.json(adLocation);
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi lấy dữ liệu', error });
  }
};

export const createEditRequest = async (req, res) => {
  try {
    const { adLocationId, newDetails, reason } = req.body;
    const editRequest = new EditRequest({ adLocationId, newDetails, reason });
    await editRequest.save();
    res.status(201).json(editRequest);
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi tạo yêu cầu chỉnh sửa', error });
  }
};

export default {
  getAllAdLocations,
  getAdLocationById,
  createEditRequest
};
