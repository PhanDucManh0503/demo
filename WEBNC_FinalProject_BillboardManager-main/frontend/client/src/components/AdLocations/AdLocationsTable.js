import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const AdLocationsTable = ({ adLocations }) => {
  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Type</Th>
            <Th>Size</Th>
            {/* Thêm các cột khác nếu cần */}
          </Tr>
        </Thead>
        <Tbody>
          {adLocations.map((location) => (
            <Tr key={location._id}>
              <Td>{location.name}</Td>
              <Td>{location.address}</Td>
              <Td>{location.locationType}</Td>
              <Td>{location.size}</Td>
              {/* Thêm các ô dữ liệu khác */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdLocationsTable;
