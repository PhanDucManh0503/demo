import React from "react";
import { Button, Stack } from "@chakra-ui/react";

const AdLocationActions = ({ onViewAdLocations, onEditAdLocation }) => {
  return (
    <Stack direction="column" spacing={4}>
      <Button colorScheme="blue" onClick={onViewAdLocations}>
        Xem Điểm Đặt Quảng Cáo
      </Button>

      <Button colorScheme="green" onClick={onEditAdLocation}>
        Gửi Yêu Cầu Chỉnh Sửa
      </Button>

      {/* Thêm các nút khác nếu cần */}
    </Stack>
  );
};

export default AdLocationActions;
