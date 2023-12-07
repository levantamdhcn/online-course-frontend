import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const PageHeader = ({
  title,
  isRenderBtn = false,
  btnTitle,
  actionButtons,
  handleClickBtn,
  breadcrumbs
}) => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="20px" fontWeight="600">
          {title}
        </Heading>
        {actionButtons}
        {isRenderBtn ? <Button onClick={handleClickBtn}>+&nbsp; {btnTitle}</Button> : null}
      </Flex>

      {breadcrumbs && (
        <Breadcrumb>
          {breadcrumbs.map((item, index) => (
            <BreadcrumbItem key={index} fontSize="14px" color="#2F69FF">
              <BreadcrumbLink as={Link} to={item.link}>
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}

          <BreadcrumbItem fontSize="14px" color="neutral.500">
            <BreadcrumbLink href="#">{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </Box>
  );
};
