import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import React, { useState } from "react";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const MAX_COMMUNITY_NAME_LENGTH = 21;

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({ open, handleClose }) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(MAX_COMMUNITY_NAME_LENGTH);
  const [communityType, setCommunityType] = useState("public");

  const handleRemainingChars = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > MAX_COMMUNITY_NAME_LENGTH) return;
    setCommunityName(event.target.value);
    setCharsRemaining(MAX_COMMUNITY_NAME_LENGTH - event.target.value.length);
  };

  const onCommunityTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(event.target.name);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" flexDirection="column" fontSize={15} padding={3}>
            Create a community
          </ModalHeader>
          <Box pl={3} pr={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" padding="10px 0px">
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text color="gray.500" fontSize={11}>
                Community names including capitalization cannot be changed
              </Text>
              <Text position="relative" top="28px" left="10px" color="gray.400">
                r/
              </Text>
              <Input
                position="relative"
                type="text"
                value={communityName}
                size="sm"
                pl="22px"
                onChange={handleRemainingChars}
              />
              <Text fontSize="9pt" my={3} color={charsRemaining === 0 ? "red" : "gray.500"}>
                {charsRemaining} Characters remaining
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
                <Stack spacing={2} mt={4}>
                  <Checkbox name="public" isChecked={communityType === "public"} onChange={onCommunityTypeChange}>
                    <Flex align="center">
                      <Icon as={BsFillPersonFill} color="gray.500" mr={1} />
                      <Text fontSize="10pt" mr={1}>
                        Public
                      </Text>
                      <Text fontSize="8pt" color="gray.500" mr={1}>
                        Anyone can view, post, and comment to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="restricted"
                    isChecked={communityType === "restricted"}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Icon as={BsFillEyeFill} color="gray.500" mr={1} />
                      <Text fontSize="10pt" mr={1}>
                        Restricted
                      </Text>
                      <Text fontSize="8pt" color="gray.500" mr={1}>
                        Anyone can view this community, but only approved users can post
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox name="private" isChecked={communityType === "private"} onChange={onCommunityTypeChange}>
                    <Flex align="center">
                      <Icon as={HiLockClosed} color="gray.500" mr={1} />
                      <Text fontSize="10pt" mr={1}>
                        Private
                      </Text>
                      <Text fontSize="8pt" color="gray.500" mr={1}>
                        Only approved users can view and submit to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>

          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
            <Button variant="outline" height="30px" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button height="30px" onClick={() => {}}>
              Create community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;