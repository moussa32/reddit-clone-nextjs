import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiHome } from "react-icons/hi";

const Directory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center" justify="space-between" width={{ base: "auto", lg: "200px" }}>
          <Flex align="center" mx={2}>
            <Icon as={HiHome} fontSize={26} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: "none", md: "flex" }}>
              <Text fontSize={14}>Home</Text>
            </Flex>
          </Flex>
          <Icon as={IoIosArrowDown} color="gray.400" />
        </Flex>
      </MenuButton>
      <MenuList>{/*<Communities/> */}Communities</MenuList>
    </Menu>
  );
};
export default Directory;
