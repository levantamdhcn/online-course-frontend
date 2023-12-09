import React from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import TrasIcon from "../../assets/images/trash.png";

const ModalConFirmDelete = ({
  show,
  handleCancel,
  handleDeleted,
}) => {
  return (
    <Modal isOpen={show} onClose={handleCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Flex alignItems="center" justifyContent="center">
            <img className="trash-icon" src={TrasIcon} alt="trash-icon" />
          </Flex>
          <Text my="4" fontWeight="500" color="black">
            Are you sure you want to delete this record?
          </Text>
          <Box display="flex" my="4" sx={{ gap: 4 }}>
            <Button variant="primary" onClick={handleCancel}>
              No
            </Button>
            <Button variant="primary-alpha" onClick={handleDeleted}>
              Yes
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalConFirmDelete;
