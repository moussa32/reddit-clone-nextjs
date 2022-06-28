import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import { User } from "firebase/auth";
import Icons from "./Icons";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        {/* <Menu/> */}
      </Flex>
    </>
  );
};
export default RightContent;
