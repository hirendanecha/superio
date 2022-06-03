import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  useTheme,
} from "@chakra-ui/react";
import { FaChevronDown, FaCaretUp } from "react-icons/fa";

import styled from "styled-components";

const ButtonWrapper = styled(Box)`
  .location_icon {
    font-size: 17px;
  }

  .location_icon path {
    stroke: #696969;
  }
`;

const MenuComponent = ({ menuName, leftIcon, MenuItems, onClick }) => {
  const theme = useTheme();

  return (
    <ButtonWrapper display="flex" justifyContent="center">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaChevronDown fontSize="15px" color="#696969" />}
          leftIcon={leftIcon}
          background="transparent"
          width="auto"
          fontSize="15px"
          fontWeight="400"
          color="#696969"
          minHeight="60px"
          _hover={{
            background: "transparent",
          }}
          _active={{
            background: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
        >
          {menuName}
        </MenuButton>
        <MenuList
          onClick={(e) => onClick(e.target.value)}
          borderRadius="0px 0px 8px 8px"
          boxShadow="0px 6px 15px rgba(64, 79, 104, 0.05)"
          borderTop={`2px solid ${theme.colors.brand.primaryColor}`}
          position="relative"
        >
          <Box position="absolute" top="-12px" left="15px">
            <FaCaretUp color={theme.colors.brand.primaryColor} />
          </Box>

          {MenuItems?.map((item, index) => (
            <MenuItem
              key={index}
              value={item?.name}
              transition={"all 0.3s ease-in-out"}
              color="#696969"
              _hover={{
                color: "brand.primaryColor",
                background: "white",
              }}
              _focus={{
                background: "white",
              }}
            >
              {item?.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </ButtonWrapper>
  );
};

export default MenuComponent;
