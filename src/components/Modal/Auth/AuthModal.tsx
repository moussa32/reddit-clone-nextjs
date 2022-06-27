import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center" pb={6}>
            <Flex direction="column" align="center" justify="center" width="70%">
              <OAuthButtons />
              <Flex align="center">
                <Divider w="100px" />
                <Text padding="2" color="gray.400" fontWeight={700}>
                  OR
                </Text>
                <Divider w="100px" />
              </Flex>
              <AuthInputs />

              {/*<ResetPassword/> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
