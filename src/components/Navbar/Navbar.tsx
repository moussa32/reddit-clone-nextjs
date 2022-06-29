import { Flex, Image as ChakraImg } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center" width={{ base: "40px", md: "auto" }} mr={{ base: 0, md: 2 }} cursor="pointer">
        <ChakraImg src="/images/redditFace.svg" height="30px" />
        <ChakraImg display={{ base: "none", md: "unset" }} src="/images/redditText.svg" height="46px" />
      </Flex>
      <Directory />
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
