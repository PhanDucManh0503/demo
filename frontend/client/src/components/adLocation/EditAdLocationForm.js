import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";

const EditAdLocationForm = ({ adLocation, onClose }) => {
  // Các trạng thái để lưu thông tin chỉnh sửa
  const [address, setAddress] = useState(adLocation.address);
  const [area, setArea] = useState(adLocation.area);
  const [locationType, setLocationType] = useState(adLocation.locationType);
  const [editTime, setEditTime] = useState("");
  const [editReason, setEditReason] = useState("");

  // Hàm xử lý khi gửi form
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Đối tượng cập nhật
    const updatedLocation = {
      address,
      area,
      locationType,
      editTime,
      editReason,
    };

    // Gửi yêu cầu cập nhật
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/ad-locations/edit",
        {
          id: adLocation._id,
          updatedLocation,
        }
      );
      console.log(response.data);
      onClose(); // Đóng form
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  // JSX của form
  return (
    <form onSubmit={handleSubmit}>
      {/* Trường nhập địa chỉ */}
      <FormControl isRequired>
        <FormLabel>Địa chỉ</FormLabel>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormControl>

      {/* Trường nhập khu vực */}
      <FormControl isRequired>
        <FormLabel>Khu vực</FormLabel>
        <Input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </FormControl>

      {/* Trường nhập loại vị trí */}
      <FormControl isRequired>
        <FormLabel>Loại vị trí</FormLabel>
        <Input
          type="text"
          value={locationType}
          onChange={(e) => setLocationType(e.target.value)}
        />
      </FormControl>

      {/* Trường nhập thời điểm xin chỉnh sửa */}
      <FormControl isRequired>
        <FormLabel>Thời điểm xin chỉnh sửa</FormLabel>
        <Input
          type="datetime-local"
          value={editTime}
          onChange={(e) => setEditTime(e.target.value)}
        />
      </FormControl>

      {/* Trường nhập lý do chỉnh sửa */}
      <FormControl isRequired>
        <FormLabel>Lý do chỉnh sửa</FormLabel>
        <Input
          type="text"
          value={editReason}
          onChange={(e) => setEditReason(e.target.value)}
        />
      </FormControl>

      {/* Nút cập nhật */}
      <Button mt={4} colorScheme="blue" type="submit">
        Cập Nhật
      </Button>
    </form>
  );
};

export default EditAdLocationForm;
