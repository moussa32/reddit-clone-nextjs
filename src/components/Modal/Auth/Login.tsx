import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  //Firebase Logic
  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        required
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <InputGroup minWidth="300">
        <Input
          name="password"
          placeholder="password"
          type={showPassword ? "text" : "password"}
          mb={2}
          required
          onChange={onChange}
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button width="100%" height="36px" mb={2} mt={2} type="submit">
        Login
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={1}>New here</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
