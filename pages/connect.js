import React from "react"
import BackButton from "../components/BackButton"
import StyledButton from "../components/StyledButton";
import { Box, Center, Heading, Input, Text, Textarea} from "@chakra-ui/react"

const form = () => {
  return (
    <>
    <Center>
      <Box border="4px solid #000000" w={["100%", "90%", "70%"]} boxSizing="border-box" borderRadius="10px" margin="1em" marginLeft="1em" padding="2em" maxWidth="800px" fontFamily="Sora">

        <Heading as="h1" textStyle="caps" fontSize="48px" paddingBottom="20px"  textAlign="left" >
          Connect
          <BackButton />
        </Heading>

        <Center>
          <Text>
            Please leave your information, and we will invite you to a community slack channel where you can work with other researchers.
          </Text>
        </Center>

        <Box paddingTop="3em">
          <form name="contact" method="POST" data-netlify="true">
            <Box marginTop="2em">
              <label>Your Name: <Input borderColor="black" size="md" type="text" name="name" /></label>
            </Box>
            <Box marginTop="2em">
              <label>Your Email: <Input borderColor="black" size="md" type="email" name="email" /></label>
            </Box>
            <Box marginTop="2em">
              <label>Message: <Textarea borderColor="black" size="md" name="message"></Textarea></label>
            </Box>

            <Box marginTop="1em">
              <StyledButton type="submit" content={"Send"} />
            </Box>
          </form>
        </Box>
      </Box>
    </Center>
    </>
  )
}

export default form;

