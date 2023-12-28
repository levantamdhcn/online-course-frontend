import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import ModalConFirmDelete from "components/ModalConfirmDelete";

export const TableAction = ({
  isRenderBtnDeleted,
  isRenderBtnView,
  isRenderBtnEdit,
  btnEditText,
  handleDeleted,
  handleView,
  handleEdit,
}) => {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <Box>
      {isRenderBtnView && (
        <Button onClick={handleView} variant="tableAction" style={{ paddingInlineStart: 'unset' }}>
          View
        </Button>
      )}
      {isRenderBtnEdit && (
        <Button onClick={handleEdit} variant="tableAction" style={{ paddingInlineStart: 'unset' }}>
          {btnEditText ? btnEditText : 'Modify'}
        </Button>
      )}
      {isRenderBtnDeleted && (
        <Button
          color="primary.500"
          _hover={{ textDecoration: "underline" }}
          onClick={() => setIsConfirm(true)}
          variant="tableAction"
          style={{ paddingInlineStart: 'unset' }}
        >
          Delete
        </Button>
      )}
      <ModalConFirmDelete
        show={!!isConfirm}
        handleDeleted={() => {
          setIsConfirm(false);
          !!handleDeleted && handleDeleted();
        }}
        handleCancel={() => setIsConfirm(false)}
      />
    </Box>
  );
};

export default TableAction;
