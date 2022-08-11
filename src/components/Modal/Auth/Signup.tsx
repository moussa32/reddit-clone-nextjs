import React, { useCallback, useEffect, useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth, firestore } from "../../../firebase/clientApp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, userCred, loading, userError] = useCreateUserWithEmailAndPassword(auth);

  //Firebase Logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) {
      setError("");
    }
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Password do not match");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Update form state
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const createUserDocument = useCallback(async (user: User) => {
    await addDoc(collection(firestore, "users"), JSON.parse(JSON.stringify(user)));
  }, []);

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred, createUserDocument]);

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
      <Input
        name="password"
        placeholder="password"
        type="password"
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
      <Input
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
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

      <Text textAlign="center" color="red" fontSize="10pt">
        {error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button width="100%" height="36px" mb={2} mt={2} type="submit" isLoading={loading}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default Signup;
