import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useCallback, useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);

  const createUserDocument = useCallback(async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  }, []);

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred, createUserDocument]);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2} onClick={() => signInWithGoogle()} isLoading={loading}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} alt="sign in with google" />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other provider</Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
