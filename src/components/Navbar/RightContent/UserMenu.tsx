import { FaRedditSquare } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        {user ? (
          <Flex align="center">
            <Flex align="center">
              <>
                <Icon fontSize={24} mr={1} color="gray.300" as={FaRedditSquare} />
              </>
              <ChevronDownIcon />
            </Flex>
          </Flex>
        ) : (
          <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount} />
        )}
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Flex>
            <Icon as={CgProfile} />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
