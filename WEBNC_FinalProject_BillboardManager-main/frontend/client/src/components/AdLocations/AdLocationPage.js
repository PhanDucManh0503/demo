import React, { useState, useEffect } from "react";
import AdLocationActions from "./AdLocationActions";
import AdLocationsTable from "./AdLocationsTable";
import EditAdLocationForm from "./EditAdLocationForm";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

const AdLocationPage = () => {
  const [adLocations, setAdLocations] = useState([]);
  const [selectedAdLocation, setSelectedAdLocation] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Fetch the ad locations data from your API and set it to state
    // fetchAdLocations().then(data => setAdLocations(data));
  }, []);

  const handleViewAdLocations = () => {
    // Logic to handle view ad locations
    // This might include fetching data if not already done
  };

  const handleEditAdLocation = (adLocation) => {
    // Set the selected ad location for editing
    setSelectedAdLocation(adLocation);
    onOpen(); // Open the modal for editing
  };

  const handleUpdateAdLocation = (updatedData) => {
    // Logic to update ad location
    // Update your state and/or send update to your API
    onClose(); // Close the modal after update
  };

  return (
    <Box>
      <AdLocationActions
        onViewAdLocations={handleViewAdLocations}
        onEditAdLocation={() => handleEditAdLocation(null)}
      />

      <AdLocationsTable adLocations={adLocations} />

      {/* Modal for Editing Ad Location */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <EditAdLocationForm
            initialData={selectedAdLocation}
            onSubmit={handleUpdateAdLocation}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdLocationPage;
