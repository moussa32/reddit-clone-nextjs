import { Flex, Image as ChakraImg } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" width={40} height={30} />
        <ChakraImg src="/images/redditText.svg" height={46} display={{ base: "none", md: "unset" }} />
      </Flex>
      <SearchInput />
      <RightContent />
      {/* <Directory />
       */}
    </Flex>
  );
};
export default Navbar;
