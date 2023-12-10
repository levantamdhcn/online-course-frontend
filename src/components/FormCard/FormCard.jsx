import React from "react";
import { Box } from "@chakra-ui/react";

export const FormCard = ({ children, sx }) => {
  return <Box sx={sx} bgColor="white" border="1px solid" borderColor="neutral.200" p="32px" borderRadius="12px" mt="24px">{children}</Box>;
};
